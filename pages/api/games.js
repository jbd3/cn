import nextConnect from 'next-connect';
import randomWords from 'random-words';
import middleware from '../../database';
import words from '../../words.json';
import gameStatusToString from '../../constants';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const { token } = req.query;
  try {
    const game = await req.db.collection('games').findOne({ token });
    res.json(game);
  } catch (err) {
    res.status(500).send();
    throw new Error(`Error loadin game with token: ${token}: ${err}`);
  }
});

handler.post(async (req, res) => {
  const { token, officialWords, green } = req.body;
  const randomInt = (min, max) => Math.round(min + (Math.random() * (max - min)));

  const doNotInclude = {};
  const getWord = ({ isOfficial }) => {
    let word = isOfficial ? words.list[randomInt(0, words.list.length - 1)] : randomWords();
    while (doNotInclude[word]) {
      word = isOfficial ? words.list[randomInt(0, words.list.length - 1)] : randomWords();
    }
    doNotInclude[word] = true;
    return word;
  };

  let gameStatus = 5;
  if (!green) gameStatus = req.query.firstPlayer || Math.random() >= 0.5 ? 1 : 2;
  // Fill the board with neutral cards
  const boardMap = [];
  for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {
      row.push({
        word: officialWords ? getWord({ isOfficial: true }) : getWord({ isOfficial: false }),
        team: 0,
        isRevealed: false,
      });
    }
    boardMap.push(row);
  }

  const addCardOwner = (int) => {
    let x = randomInt(0, 4);
    let y = randomInt(0, 4);
    while (boardMap[x][y].team !== 0) {
      x = randomInt(0, 4);
      y = randomInt(0, 4);
    }
    boardMap[x][y].team = int;
  };

  if (!green) {
    for (let i = 0; i < 9; i++) {
      addCardOwner(gameStatus === 1 ? 1 : 2);
      if (i !== 0) {
        addCardOwner(gameStatus === 1 ? 2 : 1);
      }
    }
  }

  if (green) {
    for (let i = 0; i < 7; i++) {
      addCardOwner(4);
    }
  }
  addCardOwner(3);
  if (green) {
    addCardOwner(3);
    addCardOwner(3);
  }
  const game = {
    token,
    boardMap,
    scoreBoard: {
      red: gameStatus === 2 ? 9 : 8,
      blue: gameStatus === 1 ? 9 : 8,
      gameStatus,
      green: green ? 7 : null,
    },
    players: {
      blue: [],
      red: [],
    },
  };
  try {
    await req.db.collection('games').insertOne(game);
    res.json(token);
  } catch (err) {
    res.status(500).send();
    throw new Error(`Error adding new game: ${err}`);
  }
});

handler.put(async (req, res) => {
  const { x, y, token } = req.body;
  try {
    const { boardMap, scoreBoard } = await req.db.collection('games').findOne({ token });
    boardMap[x][y].isRevealed = true;
    const { team } = boardMap[x][y];
    const { gameStatus } = scoreBoard;

    if (gameStatus < 3) {
      if (team === 3) {
        scoreBoard.gameStatus = gameStatus === 1 ? 4 : 3;
      } else {
        if (team !== gameStatus) {
          scoreBoard.gameStatus = gameStatus === 1 ? 2 : 1;
        }
        if (team === 1) {
          scoreBoard.red -= 1;
          if (scoreBoard.red === 0) {
            scoreBoard.gameStatus = 3;
          }
        }
        if (team === 2) {
          scoreBoard.blue -= 1;
          if (scoreBoard.blue === 0) {
            scoreBoard.gameStatus = 4;
          }
        }
      }
    }

    if (gameStatus === 5) {
      if (team === 3) {
        scoreBoard.gameStatus = 7;
      }
      if (team === 4) {
        scoreBoard.green -= 1;
        if (scoreBoard.green === 0) {
          scoreBoard.gameStatus = 6;
        }
      }
    }

    await req.db.collection('games').findOneAndUpdate({ token }, { $set: { boardMap, scoreBoard } }, { returnOriginal: false });
    res.send(200);
  } catch (err) {
    res.status(500).send();
    throw new Error(`Error on guess: ${err}`);
  }
});

export default handler;

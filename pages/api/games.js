import nextConnect from 'next-connect';
import randomWords from 'random-words';
import middleware from '../../database';
import words from '../../words.json';
import undercoverWords from '../../undercoverWords.json';

const handler = nextConnect();

handler.use(middleware);

// Find a game with token
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

// Create new game
handler.post(async (req, res) => {
  const { token, version, wordsListLastGame } = req.body;
  const randomInt = (min, max) => Math.round(min + (Math.random() * (max - min)));

  const wordsList = { ...wordsListLastGame } || {};
  const getWord = () => {
    const findNewWord = () => {
      let word;
      switch (version) {
        case 'randomWords':
          word = randomWords();
          break;
        case 'undercover':
          word = undercoverWords.list[randomInt(0, undercoverWords.list.length - 1)];
          break;
        default:
          word = words.list[randomInt(0, words.list.length - 1)]; //classic
      }
      return word;
    };
    let word = findNewWord();
    while (wordsList[word]) {
      word = findNewWord();
    }
    wordsList[word] = true;
    return word;
  };

  const gameStatus = Math.random() >= 0.5 ? 1 : 2;
  const boardMap = [];
  for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {
      row.push({
        word: getWord(),
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

  for (let i = 0; i < 9; i++) {
    addCardOwner(gameStatus === 1 ? 1 : 2);
    if (i !== 0) {
      addCardOwner(gameStatus === 1 ? 2 : 1);
    }
  }

  addCardOwner(3);
  const game = {
    token,
    boardMap,
    wordsList,
    version,
    scoreBoard: {
      blue: gameStatus === 1 ? 9 : 8,
      red: gameStatus === 2 ? 9 : 8,
      gameStatus: gameStatus === 1 ? 1 : 2,
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

// Update game
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

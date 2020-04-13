import useSWR from 'swr';
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router';
import Router from 'next/router'
import { useState } from 'react';
import Board from './Board';
import Toggle from '../components/Toggle';
import ScoreBoard from '../components/ScoreBoard';
import Link from 'next/link';
import NewGameButton from './NewGameButton';
import Loader from './Loader';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

export default function Index() {
  const { query } = useRouter();
  const { token } = query;
  const { data } = useSWR(`/api/games?token=${token}`, fetcher, { refreshInterval: 100 });
  console.log('data: ', data);
  if (data?.status === 404) Router.push('/404')
  let boardMap = data?.boardMap;
  let scoreBoard = data?.scoreBoard;
  let wordsList = data?.wordsList;
  let version = data?.version;
  const loading = !boardMap;

  const [isCodeMaster, setIsCodeMaster] = useState(false);

  const revealCard = (x, y) => {
    if (boardMap[x][y].team !== scoreBoard.turn) {
      scoreBoard.turn = scoreBoard.turn === 1 ? 2 : 1;
    }
    if (boardMap[x][y].team === 3) {
      scoreBoard.gameOver = true;
    }
    fetch('/api/games', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token, x, y }),
    })
  }

  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = document.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  const cardsRemaining = {
    red: 0,
    blue: 0,
    green: 0,
  };
  if (Array.isArray(boardMap)) {
    boardMap.forEach(row => {
      row.forEach(card => {
        if (card.team === 1 && !card.isRevealed) {
          cardsRemaining.red++
        }
        if (card.team === 2 && !card.isRevealed) {
          cardsRemaining.blue++
        }
        if (card.team === 4 && !card.isRevealed) {
          cardsRemaining.green++
        }
      })
    })
  }
  if (typeof boardMap === 'string') Router.push('/404')

  return (
    <main>
      <header>
        <Link href='/'>
          <div className="home-button">
            HOME
          </div>
        </Link>
        <div>
          <NewGameButton solid={false} setIsCodeMaster={setIsCodeMaster} version={version} wordsList={wordsList} />
        </div>
      </header>
      {version === 'undercover'
        ? <div className='game-title'>CODENAMES: undercover</div>
        : <div className='game-title'>CODENAMES</div>
      }
      {loading && (
        <div className="loader-container">
          <Loader />
        </div>
      )}
      {Array.isArray(boardMap) && (<>
        <div className="link-container" onClick={() => copyToClipboard()}>
          <div className="mb-2 token-form">
            <div className="flex bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" value={`${token}`} disabled />
              <button className="btn-teal" type="button">
                Copy Link
              </button>
            </div>
          </div>
        </div>
        <div className='toggleContainer'>
          <Toggle text='Codemaster' onToggle={() => setIsCodeMaster(!isCodeMaster)} checked={isCodeMaster} />
        </div>
        <ScoreBoard scoreBoard={scoreBoard} cardsRemaining={cardsRemaining} />
        <Board boardMap={boardMap} isCodeMaster={isCodeMaster} revealCard={revealCard} />
      </>)}
      <style>{`
        .game-title {
          font-family: futura;
          font-size: 45px;
          margin-top: 20px;
          align-self: center;
          color: white;
          text-align: center;
        }
        .scoreBoard {
          display: flex;
          align-content: space-between;
          align-self: center;
          border: 1px solid white;
          border-radius: 5px;
          padding: 10px;
          color: white;
          font-weight: 500;
        }
        .score {
          margin: 0 10px;
          color: white;
        }
        main {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .loader-container {
          justify-self: center;
          align-self: center;
        }
        .toggleContainer {
          width: 160px;
          align-self: center;
          margin: 20px 0;
        }
        .link-container {
          width: 98vw;
          max-width: 400px;
          align-self: center;
          font-size: 20px;
          margin: 20px 0;
        }
      `}</style>
    </main>
  );
}


import randomWords from 'random-words'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'

export default function NewGameButton({ solid, officialWords = true, setIsCodeMaster = null, isGreenMode = false }) {
  const newGame = () => {
    if (setIsCodeMaster) setIsCodeMaster(false);
    const randomInt = (min, max) => {
      return Math.round(min + (Math.random() * (max - min)));
    };
    const token = `${randomWords()}-${randomWords()}-${randomInt(100, 999)}`;
    const body = JSON.stringify({
      token,
      officialWords,
      green: isGreenMode,
    })
    Router.push(`/game?token=${token}`);
    fetch('/api/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body,
    })
      // .then(() => Router.push(`/game?token=${token}`))
      .catch(err => console.log('Error adding new game: ', err))
      .finally(() => 'Done trying to get new game')
  }
  return (
    <button className={solid ? "btn btn-blue" : "bg-transparent hover:bg-gray-200 text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded"} onClick={newGame}>
      New Game
    </button>
  )
}
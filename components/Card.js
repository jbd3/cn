import { useState } from 'react';

export default function Card({ card, isCodeMaster, rowIndex, columnIndex, revealCard }) {

  const [clicked, updateClicked] = useState(false);
  const [hover, setHover] = useState(false);

  const { isRevealed } = card;
  const { team } = card;
  let cardImage = '/card.png';
  if (isCodeMaster) {
    switch (team) {
      case 1:
        cardImage = '/redtint.png'
        break;
      case 2:
        cardImage = '/bluetint.png'
        break;
      case 3:
        cardImage = '/deathtint.png'
        break;
      case 4:
        cardImage = '/greentint.png'
        break;
      default:
        cardImage = '/card.png'
    }
  }
  if (isRevealed || clicked) {
    switch (team) {
      case 0:
        cardImage = '/neutral.png';
        break;
      case 1:
        cardImage = '/red.png'
        break;
      case 2:
        cardImage = '/blue.png'
        break;
      case 3:
        cardImage = '/death.png'
        break;
      case 4:
        cardImage = '/green.png'
        break;
      default:
        cardImage = '/card.png'
    }
  }
  return (
    <main
      onClick={() => {
        if (!card.isRevealed && !isCodeMaster) {
          revealCard(rowIndex, columnIndex, card.team)
          updateClicked(true);
        }
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="tooltip" >
        <p>{card.word}</p>
      </div>
      <div className="card">
        <div className="word" >{card.word}</div>
      </div>
      <style jsx>{`
        main {
          background-image: url(${cardImage});
          background-size: cover;
          background-repeat: no-repeat;
        }
        .card {
          display: flex;
          flex-basis: 20%;
          text-align: center;
          align-content: center;
          justify-content: center;
          width: 100%;
          margin: 0 2px;
          cursor: pointer;
        }
        .word {
          align-self: center;
          justify-content: center;
          position: absolute;
          padding-top: 4%;
          font-size: 10px;
          font-family: sans-serif;
          color: ${isRevealed || clicked ? 'rgba(0, 0, 0, 0.0)' : '#333435'};
        }
        .tooltip {
          display: ${(isRevealed || clicked) && hover ? 'flex' : 'none'};
          font-weight: 400;
          font-size: 10px;
          align-self: center;
          justify-self: center;
        }
        .tooltip p {
          color: white;
          font-weight: 600;
          text-shadow: 1px 1px 3px black;
        }
        .word:hover {
          color: '#333435';
        }
        @media screen and (min-width: 480px) {
          .word, .tooltip {
            font-size: 15px;
          }
        }
        @media screen and (min-width: 720px) {
          .word, .tooltip {
            font-size: 20px;
          }
        }
      `}</style>
    </main >
  )
}
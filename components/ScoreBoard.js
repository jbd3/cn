import { gameStatusToString } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

export default function ScoreBoard({ cardsRemaining, scoreBoard }) {
  const gameStatus = scoreBoard?.gameStatus;
  return (
    <div className='container'>
    {gameStatus > 2
      ? (
        <div className="score-board">
          { gameStatus !== 5
            ? <div className="final">{gameStatusToString[gameStatus] + '!'}</div>
            : (
              <div className="team green-team">
                <div className="color-box green">
                  {`${cardsRemaining.green}`}
                </div>
                <div className="cards-remaining">
                  CARDS REMAINING
                </div>
              </div>
            )
          }
        </div>
      ) : (
        <div className="score-board">
          <div className="team">
            <div className="arrow">
              {gameStatus === 1 && (<div>Red's Turn  <FontAwesomeIcon icon={faAngleDoubleRight} /></div>)}
            </div>
            <div className="color-box red">
              {`${cardsRemaining.red}`}
            </div>
            <div className="cards-remaining">
              CARDS REMAINING
              </div>
          </div>
          <div className="team">
            <div className="arrow">
              {gameStatus === 2 && (<div>Blue's Turn  <FontAwesomeIcon icon={faAngleDoubleRight} /></div>)}
            </div>
            <div className="color-box blue">
              {`${cardsRemaining.blue}`}
            </div>
            <div className="cards-remaining">
              CARDS REMAINING
              </div>
          </div>
        </div>)
    }
    <style> {`
      .score-board {
        display: flex;
        flex-direction: column;
        width: 450px;
        max-width: 100vw;
        color: white;
        font-weight: 600;
        margin: 0 auto;
      }
      .team {
        display: flex;
        flex-direction: row;
        margin-bottom: 5px;
      }
      .arrow {
        flex-basis: 40%;
        display: flex;
        font-size: 15px;
        justify-content: flex-end;
        align-items: center;
      }
      .color-box {
        flex-basis: 10%;
        text-align: center;
        padding: 5px; 2px;
        margin: 0 10px;
        border-radius: 5px;
      }
      .blue {
        background: #0D659E;
        border: 4px solid #005487;
      }
      .red {
        background: #E03222;
        border: 4px solid #CA0A05;
      }
      .green {
        background: #12B142;
        border: 4px solid #009526;
      }
      .final {
        flex-basis: 100%;
        font-size: 40px;
        text-align: center;
      }
      .green-status {
        flex-basis: 100%;
        font-size: 30px;
        text-align: center;
      }
      .team.green-team {
        flex-basis: 100%;
        display: flex;
        justify-content: center;
      }
      .cards-remaining {
        flex-basis: 60%;
        display: flex;
        align-items: center;
      }
      @media screen and (min-width: 480px) {
        .arrow {
          font-size: 20px;
        }
        .cards-remaining {
          font-size: 20px;
        }
      }
    `}</style >
  </div>
  )
}
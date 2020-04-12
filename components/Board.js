
import Row from './Row';

export default function Board({ boardMap, isCodeMaster, revealCard }) {

  const rowDivs = boardMap.map((row, index) => (
    <Row cards={row} key={index} isCodeMaster={isCodeMaster} rowIndex={index} revealCard={revealCard} />
  ));

  return (
    <div>
      <div className="board">{rowDivs}</div>
      <style jsx>{`
        .board {
          display: flex;
          flex-direction: column;
          width: 96vw;
          margin: 0 auto;
          height: 66vw;
          max-width: 1080px;
          max-height: 742.5px;
        }
      `}</style>
    </div>
  )
}
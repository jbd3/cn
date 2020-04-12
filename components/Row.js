import Card from './Card'

export default function Row({ cards, isCodeMaster, rowIndex, revealCard }) {
  const cardDivs = cards.map((card, index) => (
    <Card
      card={card}
      key={index}
      isCodeMaster={isCodeMaster}
      revealCard={revealCard}
      rowIndex={rowIndex}
      columnIndex={index}
    />
  ))

  return (
    <main>
      {cardDivs}
      <style jsx>{`
        main {
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-basis: 100%;
          margin: 2px 0;
        }
      `}</style>
    </main>
  )
}
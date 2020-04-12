import Nav from './Nav';
import NewGameButton from './NewGameButton';

export default function Layout({ children }) {
  return (
    <main className="layout">
      <header>
        <div className="topButton">
          <NewGameButton solid={false} />
        </div>
      </header>
      {children}
      <footer><p>Copyright Ignored 2020</p></footer>
      <style>{`
        .layout {
          background: rgb(253,220,0);
          background: radial-gradient(circle, rgba(253,220,0,1) 0%, rgba(240,135,41,1) 44%, rgba(126,18,75,1) 100%);
        }
        header {
          display:flex;
          justify-content: flex-end;
          padding: 20px;
          border-bottom: 1px solid white;
        }
        topButton {
          color: white;
        }
        footer {
          display: flex;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-height: 8px;
          margin-top: 10px;
          padding: 30px 0;
        }
      `}</style>
    </main>
  )
}
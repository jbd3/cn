export default function Layout({ children }) {
  return (
    <main className="layout">
      {children}
      {/* <footer><a href='https://paypal.me/bknyjake'>donate</a></footer> */}
      <footer>A Quarantine Production 2020</footer>
      <style>{`
        .layout {
          background: rgb(253,220,0);
          background: radial-gradient(circle, rgba(253,220,0,1) 0%, rgba(240,135,41,1) 44%, rgba(126,18,75,1) 100%);
        }
        header {
          display:flex;
          justify-content: space-between;
          padding: 20px;
          border-bottom: 1px solid white;
        }
        .home-button {
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }
        footer {
          display: flex;
          justify-content: center;
          color: #ffffff36;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.5px;
          border-top: 1px solid white;
          padding: 40px 0;
        }
      `}</style>
    </main>
  )
}
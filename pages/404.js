import Layout from '../components/Layout'
import Toggle from '../components/Toggle'
import { useState } from 'react';
import NewGameButton from '../components/NewGameButton'

import Link from 'next/link'

export default function Index() {

  const [officialWords, setOfficialWords] = useState(true);

  return (
    <Layout>
      <header>
        <Link href='/'>
          <div className="home-button">
            HOME
          </div>
        </Link>
        <div>
          <NewGameButton solid={false} setIsCodeMaster={null} />
        </div>
      </header>
      <main className="home">
        <div className="hero">CODE BROKEN</div>
        <img src='/talkbubble404.png' alt='box-art' />
      </main>
      <style jsx global>{`
            @font-face {
              font-family: 'futura', Open Sans', sans-serif;
              src: url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
              font-style: normal;
              font-display: swap;
            }
            .toggle {
              width: 100%;
              margin-bottom: 20px;
            }
            .token-form {
              margin-top: 30px;
            }
            .home {
              display: flex;
              flex-direction: column;
              align-items: center;
              border-bottom: solid 10px white;
            }
            .hero {
              width: 100%;
              padding: 20px;
              font-size: 12vw;
              color: white;
              display: flex;
              justify-content: center;
              font-family: futura;
            }
            img {
              margin-top: 30px;
              width: 60%;
              max-width: 513px;
              max-height: 548px;
              justify-self: end;
            }
          `}
      </style>
    </Layout>
  );
}

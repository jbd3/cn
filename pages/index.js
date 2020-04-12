
import Layout from '../components/Layout'
import Toggle from '../components/Toggle'
import { useState } from 'react';
import NewGameButton from '../components/NewGameButton'

export default function Index() {

  const [officialWords, setOfficialWords] = useState(true);

  return (
    <Layout>
      <main className="home">
        <div className="hero">CODENAMES</div>
        <div className="toggle">
          <Toggle text={`${officialWords ? 'Use official words' : 'Use random words'}`} onToggle={() => setOfficialWords(!officialWords)} checked={officialWords} />
        </div>
        <NewGameButton solid officialWords={officialWords} />
        <div className="mb-4 token-form">
          <div className="flex bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Current game token" />
            <button className="btn-teal" type="button">
              Submit
            </button>
          </div>
        </div>
        <img src='/talkbubble.png' alt='box-art' />
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

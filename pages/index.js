
import Layout from '../components/Layout'
import Toggle from '../components/Toggle'
import { useState } from 'react';
import NewGameButton from '../components/NewGameButton'

import Link from 'next/link'
import Router from 'next/router'

export default function Index() {

  const [officialWords, setOfficialWords] = useState(true);
  // const [isGreenMode, setIsGreenMode] = useState(false);
  const [isUndercover, setIsUndercover] = useState(false);
  const [token, updateToken] = useState('');
  let version = 'classic';
  if (!officialWords) version = 'randomWords';
  if (isUndercover) version = 'undercover';

  return (
    <Layout>
      <header>
        <Link href='/'>
          <div className="home-button">
            HOME
          </div>
        </Link>
        <div>
          <NewGameButton solid={false} setIsCodeMaster={null} version={version} />
        </div>
      </header>
      <main className="home">
        <div className="hero">CODENAMES</div>
        <div className="toggle">
          <Toggle text={`${officialWords ? 'Use official words' : 'Use random words'}`} onToggle={() => setOfficialWords(!officialWords)} checked={officialWords} />
        </div>
        {/* <div className='toggle'>
          <Toggle text='Duet Mode' onToggle={() => setIsGreenMode(!isGreenMode)} checked={isGreenMode} />
        </div> */}
        <div className='toggle'>
          <Toggle
            text='Undercover (NSFW)'
            onToggle={() => {
              setIsUndercover(!isUndercover);
              setOfficialWords(true);
            }}
            checked={isUndercover}
          />
        </div>
        <NewGameButton solid version={version} />
        <div className="mb-4 token-form">
          <div className="flex bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Current game token"
              onChange={(e) => updateToken(e.target.value)}
              value={token}
            />
            <button className="btn-teal" type="button" onClick={(e) => {
              e.preventDefault()
              Router.push(`/game?token=${token}`)
            }}>
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

import { useMemo } from 'react'
import { showcaseImages } from '../data/showcaseImages'
import Usage from './Usage'
import FAQ from './FAQ'
import Changelog from './Changelog'
import Footer from './Footer'

function Home() {
  const randomImage = useMemo(() => {
    if (!showcaseImages.length) return '/static/img/showcases/Trinterin_1.png'
    const idx = Math.floor(Math.random() * showcaseImages.length)
    return showcaseImages[idx]
  }, [])

  return (
    <>
      <header>
        <ul id="nav">
          <li>
            <a href="#usage">Usage</a>
          </li>
          <li>
            <a href="#faq">F.A.Q</a>
          </li>
          <li>
            <a href="#changelog">Changelog</a>
          </li>
          <li>
            <a href="https://discord.gg/SSqkNrM" target="_blank" rel="noreferrer">Support</a>
          </li>
        </ul>
      </header>
      <main id="home">
        <h1>
          Discord Rich Presence
          <br /> for Guild Wars 2
        </h1>
        <img src={randomImage} alt="Showcasing screenshot" id="main-ss" />
        <div id="features">
          <h2>Features</h2>
          <hr />
          <ul>
            <li>Character name</li>
            <li>Character class</li>
            <li>Current map</li>
            <li>Time spent on current map</li>
            <li>Mount and combat status</li>
            <li>Active commander tag</li>
            <li>API key support</li>
            <li>Multiboxing support</li>
            <li>Automatic Discord webhook raid announcer</li>
            <li>Show nearest point of interest on map image hover</li>
            <li>Show the boss you're currently fighting in raids, fractals and strikes</li>
            <li>Language support for en, es, fr, de, pt-br</li>
          </ul>
        </div>
        <div className="btn-row">
          <a id="download" href="https://github.com/Maselkov/GW2RPC/releases/latest/download/gw2rpc_installer.exe">
            Download Installer
          </a>
          <a id="download" href="https://github.com/Maselkov/GW2RPC/releases/latest/download/gw2rpc.zip">
            Download ZIP
          </a>
        </div>
      </main>

      <article id="showcase">
        <h1>Showcase</h1>
        <div className="showcase-embed-wrap">
          <iframe
            className="showcase-embed"
            src="https://www.youtube.com/embed/ZQn2eZ1qRI0?autoplay=1&mute=1&loop=1&playlist=ZQn2eZ1qRI0"
            title="Guild Wars 2 - Rich Presence v2.5"
            frameBorder={0}
            allow="loop; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </article>

      <Usage />

      <article id="contribute">
        <h1>Contribute</h1>
        <p>GW2RPC will remain free to use and continues to run with kind donations and volunteer contributions.</p>
        <p>If you enjoy using GW2RPC, please consider donating to fund future development!</p>
        <div className="actions-centered">
          <a
            className="button--paypal"
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UEBHM63V547KN"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-paypal" /> Donate with PayPal
          </a>
        </div>
      </article>

      <FAQ />

      <hr />

      <Changelog />

      <Footer />
    </>
  )
}

export default Home

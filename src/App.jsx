import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Julian McCarty (Landing Page)</h1>
          <p>
            Fourth Year Computer Science Student @ Dalhousie
          </p>
        </div>
      </section>

      <section id="spacer"></section>
      <section>
        <div id="social">
          <h2>Quick Intro</h2>
        </div>
      </section>
      <section>
        <div>
          <h2>Quick Connection Hyper links (Linked in, Github, mby twitter)</h2>            
        </div>
      </section>

      <section id="spacer"></section>
      
      <section>
        <div>
          <h2>About</h2>
        </div>
      </section>

      <section id="spacer"></section>
      
      <section>
        <div>
          <h2>Projects</h2>
        </div>
      </section>

      <section id="spacer"></section>
      
      <section>
        <div>
          <h2> Work Experience</h2>
        </div>
      </section>

      <section id="spacer"></section>
      
      <section>
        <div>
          <h2> Contact me</h2>
        </div>
      </section>
    </>
  )
}

export default App

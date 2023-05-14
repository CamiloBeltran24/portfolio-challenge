import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PersonalOverview } from './components/PersonalOverview';
import { Skills } from './components/Skills'; 

function App() {
  return (
    <>
      <div className="container">

        <PersonalOverview/>
        <Skills title="front end" technologies="React,Javascript,SASS,CSS,HTML,Bootstrap,WordPress"/>
      </div>
    </>
  )
}

export default App

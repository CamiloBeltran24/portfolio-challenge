import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PersonalOverview } from './components/PersonalOverview';
import { Skills } from './components/Skills';
import { Blogs } from './components/Blogs';
import { Hobbies } from './components/Hobbies';

function App() {
  return (
    <>
      <div className="container">

        <PersonalOverview/>
        <Skills title="front end" technologies="React,Javascript,SASS,CSS,HTML,Bootstrap,WordPress"/>
        <Blogs smallTitle="Blog"/>
        <Hobbies />
      </div>
    </>
  )
}

export default App

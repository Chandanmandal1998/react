import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  //const [count, setCount] = useState(0)


  return (
    <>
    <Navbar title={123} aboutText="About US" />
       {/* <Navbar /> */}
    </>
  )
}

export default App

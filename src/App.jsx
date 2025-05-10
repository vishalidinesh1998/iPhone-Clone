import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Text from './components/Text'
import Middle from './components/Middle'
import Watch from './components/Watch'
import Brand from './components/Brand'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Navbar/>
  <Text/>
  <Hero/>
  <Middle/>
  <Watch/>
  <Brand/>
  <Footer/>
  </>
)
}

export default App

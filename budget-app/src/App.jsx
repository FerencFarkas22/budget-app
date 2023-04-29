import { useState } from 'react'
import Content from "./components/Content"
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Navbar />
      <Content />
      <Footer />
    </div>
  )
}

export default App

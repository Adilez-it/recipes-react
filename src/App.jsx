import { useState } from 'react'
import './App.css'
import Recipe from './pages/Recipe'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Recipe />
    </>
  )
}

export default App

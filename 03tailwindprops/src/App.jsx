import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from  './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "hitesh",
    age:21
  }
  let newarr=[1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black  p-3 rounded-xl mb-2  '>tailwind test</h1>
    <Card username="chaiaurcode" btntext="clickme"/>
    <Card username="hitesh"/>
   
</> 
  )
}

export default App

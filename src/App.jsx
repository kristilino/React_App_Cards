import './App.css'
import Card from './components/Card'
import './styles/Card.css'
import { useState } from 'react'
import {employees} from '../src/database/employee'




function App() {

  const [data, setData] = useState(employees)
  

  const displayCards = (element, index) => {     
    return <Card key={index} person={element} />

  }
  

  return (
    <>
    {data.map(displayCards)}
         </>
  )
}

export default App

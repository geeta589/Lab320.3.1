import { useState } from 'react'
import './App.css'
import LearnerList from './components/LearnerList/LearnerList'
import { Learners } from './data/Learners'
// import Score from './components/ScoreList/ScoreList'

function App() {
  const [learners, setLearners] = useState(Learners)

  return (
    <>
      <LearnerList item ={learners}/>
      
      </>
    
  )
}

export default App

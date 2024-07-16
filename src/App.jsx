import { useState } from 'react'
import './App.css'
import Timer from './Timer'

function App() {

  const [ isTimerShowing, setIsTimerShowing ] = useState(false)

  const handleToggleTimer = () => {
    // if (isTimerShowing === false) {
    //   setIsTimerShowing(true)
    // } else {
    //   setIsTimerShowing(false)
    // }
    setIsTimerShowing( !isTimerShowing )
  }

  return (
    <>

      <button onClick={ handleToggleTimer }>Aparece temporizador</button>

      {/* { isTimerShowing ? <Timer setIsTimerShowing={setIsTimerShowing}/> : null } */}
      { isTimerShowing && <Timer setIsTimerShowing={setIsTimerShowing}/> }

    </>
  )
}

export default App

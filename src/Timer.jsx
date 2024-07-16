import { useEffect, useState } from 'react'

function Timer(props) {


  const [ timerValue, setTimerValue ] = useState(20)
  const [ timerColor, setTimerColor ] = useState("white")

  useEffect(() => {
    console.log("ComponentDidMount")

    let intervalId = setInterval(() => {
      // console.log("intervalo andando")
      // setTimerValue(timerValue - 1)
      //* aqui se pierde el valor de timerValue por conflicto de intervalos con useEffect de react


      //* usamos la funcion set de la forma avanzada para tener siempre acceso al estado actualizado
      setTimerValue( (valorActualDelEstado) => {
        return valorActualDelEstado - 1 // el nuevo valor que quiero
      } )

    }, 1000)

    return () => {
      console.log("ComponentWillUnmount")
      clearInterval(intervalId)
    }

  }, [])

  useEffect(() => {
    console.log("ComponentDidUpdate", "timerValue")
    if (timerValue === 5) {
      setTimerColor("red")
    }
    if (timerValue <= 0) {
      props.setIsTimerShowing(false)
    }

  }, [timerValue])

  return (
    <div>
      
      <h3>Timer</h3>

      <h1 style={{color: timerColor}}>{timerValue}</h1>

    </div>
  )
}

export default Timer
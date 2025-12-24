import { useState } from 'react'
import Letras from './Letras'
import ElegirPalabra from './Lista_De_Palabras'

function App() {
  const [palabraActual, setPalabraActual] = useState('')
  const [letrasAdivinadas, setLetrasAdivinadas] = useState(new Set())

  const iniciarNuevoJuego = () => {
    const nuevaPalabra = ElegirPalabra()
    setPalabraActual(nuevaPalabra)
    setLetrasAdivinadas(new Set())
  }

  const manejarLetraClick = (letra) => {
    setLetrasAdivinadas(prev => new Set([...prev, letra]))
  }

  // Crear display de la palabra con letras adivinadas
  const crearDisplayPalabra = () => {
    if (!palabraActual) return ''
    
    return palabraActual
      .split('')
      .map(letra => letrasAdivinadas.has(letra.toUpperCase()) ? letra.toUpperCase() : '_')
      .join(' ')
  }

  return (
    <>
      <div className="gallows-vertical"></div>
      <div className="gallows-horizontal"></div>
      <div className="gallows-rope"></div>
      <div className="gallows-base"></div>
      <div className="head"></div>
      <div className="chest"></div>
      <div className="left-leg"></div>
      <div className="right-leg"></div>
      <div className="left-arm"></div>
      <div className="right-arm"></div>

      <button className="nuevo-juego-btn" onClick={iniciarNuevoJuego}>
        Juego Nuevo
      </button>

      <div className="palabra-display">
        {crearDisplayPalabra()}
      </div>

      <Letras 
        letrasAdivinadas={letrasAdivinadas} 
        onLetraClick={manejarLetraClick} 
      />
    </>
  )
}

export default App

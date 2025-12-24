import './Letras.css'

function Letras({ letrasAdivinadas, onLetraClick }) {
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="letras-container">
      {letras.map((letra) => {
        const usada = letrasAdivinadas.has(letra);
        return (
          <button
            key={letra}
            id="letter-button"
            name={letra}
            className={`letra-button ${usada ? 'usada' : ''}`}
            onClick={() => !usada && onLetraClick(letra)}
            disabled={usada}
          >
            {letra}
          </button>
        );
      })}
    </div>
  );
}

export default Letras;

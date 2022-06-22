import { useState } from "react";

const Contador = () => {
   
    const [contador, setContador] = useState(0);
  
    const sumar = () => setContador(valorActual => valorActual + 1);
    const restar = () => setContador(prevState => prevState - 1);
    const reiniciar = () => setContador(0);

    return (
        <>
            <div>Hola</div>
            <div style={{display: "flex"}}>
                <button onClick={sumar}>+</button>
                <h2 style={{ margin: '1rem' }}>{contador}</h2>
                <button onClick={restar}>-</button>
                <button onClick={reiniciar}>Reiniciar</button>
            </div>
        </>
     );
}
 
export default Contador;
import { useEffect, useState } from "react";

const Contador = () => {
   
    const [contador, setContador] = useState(0);
    const [clicks, setClicks] = useState(0);
  
    const sumar = () => setContador(valorActual => valorActual + 1);
    const restar = () => setContador(prevState => prevState - 1);
    const reiniciar = () => setContador(0);

    // useEffect(callback, arrayDeDependencias)
    useEffect( () => {
        if (contador === 0) return;
        setClicks(valorActual => valorActual + 1)
    }, [contador])
    

    return (
        <>
            <div>Contador</div>

            <h3>Usted ha clickeado en el contador {clicks} veces </h3>

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
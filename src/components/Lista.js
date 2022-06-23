import axios from "axios";
import { useEffect, useState } from "react";

const Lista = () => {
    
    const [data, setData] = useState([]);
    const [error, setError] = useState({
        isError: false,
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    
    const [botonActualizador, setBotonActualizador] = useState('');

    useEffect(() => {
        setIsLoading(true);
        axios('https://jsonplaceholder.typicode.com/users')
            .then(res => setData(res.data))
            .catch(err => setError({
                isError: true,
                message: err.message,
            }))
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false)
                }, 1000)
            })
    }, [botonActualizador])

    return (
        <>
            <button onClick={() => setBotonActualizador(!botonActualizador)}>Boton Actualizador</button>
            <ul>
                { 
                    error.isError ? <h4 style={{color: 'red'}}>Error: {error.message}</h4> :
                
                        isLoading ? <h4>Loading....</h4>:  

                        data.length !== 0 &&
            
                            data.map(item => (
                        <li>{item.name} --- {item.email}</li>
                        ))
                }
            </ul>
        </>
     );
}
 
export default Lista;
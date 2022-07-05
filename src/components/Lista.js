import axios from "axios";
import { useEffect, useState } from "react";

const Lista = () => {
    
    const [data, setData] = useState([]);
    const [error, setError] = useState({
        isError: false,
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const [worldCupData, setWorldCupData] = useState([]);
    const [worldCupError, setWorldCupError] = useState({
        isError: false,
        message: '',
    });
    const [isWorldCupLoading, setIsWorldCupLoading] = useState(false);
    
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

    useEffect(() => {
        setIsWorldCupLoading(true);
        axios('http://localhost:8000/team')
            .then(res => setWorldCupData(res.data))
            .catch(err => setWorldCupError({
                isError: true,
                message: err.message,
            }))
            .finally(() => {
                setTimeout(() => {
                    setIsWorldCupLoading(false)
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

            <ul style={{
                display: 'flex',
                // flexDirection: 'column',
                gap: '1rem',
                listStyle: 'none',
            }}>
                { 
                    worldCupError.isWorldCupError ? <h4 style={{color: 'red'}}>Error: {worldCupError.message}</h4> :
                
                        isWorldCupLoading ? <h4>Loading....</h4>:  

                          worldCupData.length !== 0 &&
            
                            worldCupData.matches.map(({match, date, day, time, rival, stadium, img}) => (
                                 <li>
                                    <div style={{
                                        maxWidth: '200px',
                                        background: 'skyblue',
                                        padding: 10,
                                    }}>
                                        <h2>{rival}</h2>
                                        <img src={img} alt={rival} style={{maxWidth: '100%'}}/>
                                        <div style={{
                                            display: 'flex',
                                            gap: '1rem',
                                            fontSize: 13,
                                        }}>
                                            <p>{date}</p>
                                            <p>{day}</p>
                                            <p>{time}</p>
                                        </div>
                                        <h3>{stadium}</h3>
                                    </div>
                                    
                                 </li>
                            ))
                }
            </ul>
        </>
     );
}
 
export default Lista;
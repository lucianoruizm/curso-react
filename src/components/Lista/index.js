import { useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import Card from "../Card";

const selectData = [
    { value: 'Arabia Saudita', label: 'Arabia Saudita' },
    { value: 'México', label: 'México' },
    { value: 'Polonia', label: 'Polonia' },
];

const Lista = () => {

    const { data: worldCupData, error: worldCupError, isLoading: isWorldCupLoading } =
        useAxios([], 'http://localhost:8000/team');

    const [option, setOption] = useState('');

    function selectHandler(e) {
        setOption(e.target.value)
    }

    return (
        <>
            <h2>Selección Argentina</h2>

            <form>
                <label htmlFor="matches">Selecciona un Rival: </label>
                <select 
                    name="matches" 
                    id="matches"
                    defaultValue=""
                    onChange={selectHandler}
                    >
                    
                    <option value="" disabled>Selecciones: </option>

                    { selectData.map((item, index) => (
                        <option key={index} value={ item.value }>
                            { item.label }
                        </option>
                    )) }
                </select>

            </form>

            <h3>Partidos de la Fase de Grupos</h3>

            <ul style={{
                display: 'flex',
                gap: '1rem',
                listStyle: 'none',
            }}>
                {
                    worldCupError.isError ? <h4 style={{ color: 'red' }}>Error: {worldCupError.message}</h4> :

                        isWorldCupLoading ? <h4>Cargando....</h4> :

                            worldCupData.length !== 0 &&

                            worldCupData.matches.map(({ match, date, day, time, rival, stadium, img }) => (
                                <Card 
                                    key={match}
                                    match={match} 
                                    date={date} 
                                    day={day} 
                                    time={time} 
                                    rival={rival} 
                                    stadium={stadium} 
                                    img={img}
                                    option={option}
                                />
                            ))
                }
            </ul>
        </>
    );
}

export default Lista;
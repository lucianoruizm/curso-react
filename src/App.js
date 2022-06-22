import { useState } from 'react';
import './App.css';
import Lista from './components/Lista';
import Contador from './components/Contador';

const autosData = [
  { id: 1, strong: 'Corsa', span: 'Chevrolet' },
  { id: 2, strong: 'Ka', span: 'Ford' },
  { id: 3, strong: 'Focus', span: 'Ford' },
  { id: 4, strong: 'Siena', span: 'Fiat' },
  { id: 5, strong: 'Gol', span: 'Volskwagen' },
]

const electrodomesticosData = [
  { id: 1, strong: 'Heladera', span: 'Philco' },
  { id: 2, strong: 'Cocina', span: 'Escorial' },
  { id: 3, strong: 'Microondas', span: 'Panoramic' },
  { id: 4, strong: 'Batidora', span: 'Peabod' },
  { id: 5, strong: 'Aire Acondicionado', span: 'Lift' },
]

function App() {
  
  const [estado, setEstado] = useState('Valor Inicial de Estados');
  const [autos, setAutos] = useState(autosData);
  const [electrodomesticos, setElectrodomesticos] = useState(electrodomesticosData);
 
  function actualizarEstado() {
    setEstado('Nuevo Valor de Estado');
    setAutos(prevState => [...prevState, //Se pasa una función (callback) para acceder al estado previo y se le añade nuevos elementos.
      { id: 6, strong: 'Palio', span: 'Fiat' },
      { id: 7, strong: 'Bora', span: 'Volskwagen' },
    ])
    setElectrodomesticos(prevState => [...prevState,
      { id: 6, strong: 'Batidora', span: 'Liliana' },
      { id: 7, strong: 'Aire Acondicionado', span: 'LG' },
    ])
  };
  
  return (
    <div>
      <Contador/>

      <button onClick={actualizarEstado}>Actualizar Estado</button>
      <h1>{ estado }</h1>

      <Lista titulo= 'Lista de Autos' lista={autos} />
      <Lista titulo= 'Lista de Electrodomesticos' lista={electrodomesticos} />
    </div>
  );
}

export default App;
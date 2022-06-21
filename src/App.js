import './App.css';

function App() {

  const estilos = {
    div1: { backgroundColor: 'red', width: 650, height: 400, margin: '0 auto' },
    div2: { backgroundColor: 'yellow', width: 450, height: 300, margin: '0 auto' },
    div3: { backgroundColor: 'green', width: 300, height: 200, margin: '0 auto', 
      display: 'flex', justifyContent: 'center', alignItems: 'center' },
    btn: { height: 50 },
  }

  function eventHandler(e) {
    e.target.style.backgroundColor = 'blue';
  }

  function detenerPropagacion(e) {
    e.stopPropagation();
  }

  return (
    <div style={estilos.div1} onClick={eventHandler}>

      <div style={estilos.div2} onClick={detenerPropagacion}> 

        <div style={estilos.div3}>
          
          <button style={estilos.btn}>Presioname</button>
        
        </div>
      
      </div>

    </div>
  );
}

export default App;
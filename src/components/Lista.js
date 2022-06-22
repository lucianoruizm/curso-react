import ListItem from "./ListItem";

function Lista({ titulo, lista, children }) {

    return (
        <ul>
            <li><h3>{titulo}</h3></li>
            {lista.map(item => (
                <ListItem key={item.id} contenido={item}/>
            ))}

            { children }
        </ul>
    )
}

export default Lista;
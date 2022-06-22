const ListItem = ({ contenido, eliminar }) => {

    return (
        <li style={{ listStyle: 'none' }} 
            onClick={() => eliminar(contenido.id)}>
            <span>{contenido.span}</span>
            <strong style={{ paddingLeft: 5 }}>{contenido.strong}</strong>
        </li>
    )
}

export default ListItem;
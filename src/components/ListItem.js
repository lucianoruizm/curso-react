const ListItem = (props) => {

    return (
        <li style={{ listStyle: 'none' }}>
            <span>{props.contenido.span}</span>
            <strong style={{ paddingLeft: 5 }}>{props.contenido.strong}</strong>
        </li>
    )
}

export default ListItem;
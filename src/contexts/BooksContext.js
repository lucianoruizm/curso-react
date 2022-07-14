import { createContext, useState } from 'react';

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: '100 Años de Soledad', id: 1 },
        {title: 'Las Venas Abiertas de America Latina', id: 2 },
        {title: 'El Viejo y el Mar', id: 3 },
        {title: 'Sandokan', id: 4 },
      ]);
    
    return (
        <BooksContext.Provider value={books}>
            { props.children }
        </BooksContext.Provider>
    )
}

export default BooksContextProvider;


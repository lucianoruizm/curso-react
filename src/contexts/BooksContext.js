import { createContext, useEffect, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import bookReducer from '../reducers/bookReducer';

export const BooksContext = createContext();

const initialState = [
    { author: 'García Marquez', title: '100 Años de Soledad', id: 1, isRead: false },
    { author: 'Eduardo Galeano', title: 'Las Venas Abiertas de America Latina', id: 2, isRead: false },
    { author: 'Ernest Hemignway', title: 'El Viejo y el Mar', id: 3, isRead: false },
    { author: 'Emilio Salgari', title: 'Sandokan', id: 4, isRead: false },
];

const BooksContextProvider = (props) => {
    const [books, dispatch] = useLocalStorage('books', bookReducer, initialState);
    

    return (
        <BooksContext.Provider value={{ books, dispatch }}>
            { props.children }
        </BooksContext.Provider>
    )
}

export default BooksContextProvider;


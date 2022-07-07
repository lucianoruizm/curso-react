import { createContext, useState } from 'react';
import './App.css';
import { AppContainer } from './App.styled';
import BooksList from './components/BooksList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';

export const BooksContext = createContext();

function App() {
  const [books, setBooks] = useState([
    {title: '100 Años de Aoledad', id: 1 },
    {title: 'Las Venas Abiertas de America Latina', id: 2 },
    {title: 'El Viejo y el Mar', id: 3 },
    {title: 'Sandokan', id: 4 },
  ]);

  return (
    <AppContainer>
      <BooksContext.Provider value={books}>
         
        <Navbar />

        <BooksList/>
        
        <ThemeToggle/>

      </BooksContext.Provider>
      
    </AppContainer>
  );
}

export default App;
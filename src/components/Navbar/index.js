import { useContext } from "react";
import { BooksContext, ThemeContext } from "../../App";
import { NavbarContainer } from "./navbar.styled";

export default function Navbar () {
    const books = useContext(BooksContext)
    const themeStyles = useContext(ThemeContext)
    
    return (
           <NavbarContainer themeStyles={themeStyles}>
              <h1>Libros Disponibles: {books.length}</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
           </NavbarContainer>
    )
}
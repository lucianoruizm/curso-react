import { useContext } from "react";
import { BooksContext, ThemeContext } from "../../App";
import { BookItem, BooksContainer, BookUnorderedList} from "./book-list.styled";


const BooksList = () => {
    const books = useContext(BooksContext)
    const themeStyles = useContext(ThemeContext)

    return (
        <BooksContainer themeStyles={themeStyles}>
            <h2>Lista de Libros</h2>
            <BookUnorderedList>
                { books.map(book => (
                    <BookItem key={ book.id }>
                        { book.title }
                    </BookItem>
                ))}
            </BookUnorderedList>
        </BooksContainer>
    );
}

export default BooksList;
import { useContext } from "react";
import { BooksContext } from "../../App";
import { BookItem, BooksContainer, BookUnorderedList} from "./book-list.styled";


const BooksList = () => {
    const books = useContext(BooksContext)

    return (
        <BooksContainer>
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
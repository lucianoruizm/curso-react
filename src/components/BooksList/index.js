import React from 'react';
import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { BooksContainer, BookUnorderedList} from "./book-list.styled";
import BookItem from '../BookItem';

const BooksList = () => {
    const { books } = useContext(BooksContext)
    const { themeStyles } = useContext(ThemeContext)

    return (
        <BooksContainer themeStyles={themeStyles}>
            <BookUnorderedList>
                { books.map(book => (
                    <BookItem key={ book.id } book={book} />
                ))}
            </BookUnorderedList>
        </BooksContainer>
    );
}

export default BooksList;
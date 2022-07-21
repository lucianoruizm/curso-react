import React, { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import { ACTIONS } from "../../reducers/bookReducer";
import { BookItemContainer, IconContainer, TextContainer } from "./book-item.styled"

function BookItem({ book }) {
    const { books, dispatch } = useContext(BooksContext);
    
    const deleteBook = (id) => {
        dispatch({ type: ACTIONS.REMOVE_BOOK, payload: id});
    };

    const updateBook = (id) => {
        dispatch({ type: ACTIONS.UPDATE_BOOK, payload: id});
    }

    return (
        <BookItemContainer>
            <TextContainer isRead={book.isRead}>
                <div>{book.title}</div>
                <div>{book.author}</div>
            </TextContainer>
            <IconContainer>
                <ion-icon 
                    size="large"
                    name="checkmark-circle-outline" 
                    id="check"
                    onClick={() => updateBook(book.id)}
                />
                <ion-icon 
                    size="large" 
                    name="close-circle-outline" 
                    id="cross"
                    onClick={() => deleteBook(book.id)}
                />
            </IconContainer>
            
        </BookItemContainer>
    )
}

export default BookItem;
import React from "react";
import { BookItemContainer } from "./book-item.styled"

function BookItem({ book }) {

    return (
        <BookItemContainer>
            <div>{book.title}</div>
            <div>{book.author}</div>
        </BookItemContainer>
    )
}

export default BookItem;
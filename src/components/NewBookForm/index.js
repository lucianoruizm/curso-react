import React, { useContext, useState } from 'react';
import { BooksContext } from "../../contexts/BooksContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ACTIONS } from '../../reducers/bookReducer';
import { FormContainer, InputField } from './new-book-form.styled';

const NewBookForm = () => {
    const { dispatch } = useContext(BooksContext)
    const { themeStyles } = useContext(ThemeContext)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { author: author, title: title, id: new Date };
        dispatch({ type: ACTIONS.ADD_BOOK, payload: newBook});
        setTitle('');
        setAuthor('');
    }

    return (
        <FormContainer 
            themeStyles={themeStyles} 
            onSubmit={handleSubmit}
        >
            <InputField 
                type="text" 
                value={title}
                placeholder="book title"
                required
                onChange={e => setTitle(e.target.value)}
            />
            <InputField 
                type="text" 
                value={author}
                placeholder="book author"
                required
                onChange={e => setAuthor(e.target.value)}
            />
            <InputField type="submit"/>
        </FormContainer>
    );
}

export default NewBookForm;
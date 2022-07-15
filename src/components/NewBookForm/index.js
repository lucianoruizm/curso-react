import React, { useContext, useState } from 'react';
import { BooksContext } from "../../contexts/BooksContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FormContainer, InputField } from './new-book-form.styled';

const NewBookForm = () => {
    const books = useContext(BooksContext)
    const { themeStyles } = useContext(ThemeContext)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
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
                placeholder="author title"
                required
                onChange={e => setAuthor(e.target.value)}
            />
            <InputField type="submit"/>
        </FormContainer>
    );
}

export default NewBookForm;
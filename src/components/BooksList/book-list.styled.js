import styled from "@emotion/styled/macro";

export const BooksContainer = styled.div`
    ${({ themeStyles }) => themeStyles};
    padding: 0 20px;
    border-top: solid 1px #fff;
    border-bottom: solid 1px #fff;
`;

export const BookUnorderedList = styled.ul`
    padding: 0;
    list-style-type: none;
`;
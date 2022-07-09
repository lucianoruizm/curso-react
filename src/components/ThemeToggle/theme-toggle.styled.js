import styled from "@emotion/styled";

export const ToggleButton = styled.button`
    background: skyblue;
    color: #555;
    border: none;
    border-radius: 5px;
    padding: .3rem .5rem;
`;

export const ToggleContainer = styled.div`
    ${({ themeStyles }) => themeStyles};
    padding: 1rem;
    padding-top: 0;
`;
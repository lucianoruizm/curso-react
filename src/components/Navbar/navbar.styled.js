import styled from "@emotion/styled"

export const NavbarContainer = styled.nav`
    ${({ themeStyles }) => themeStyles};
    padding: 5px;
    ul {
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 10px 20px;
    }
`;

export const TimeContainer = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 13px;
`;

export const Text = styled.h2``;

export const Image = styled.img`
    max-width: 100%;
`;
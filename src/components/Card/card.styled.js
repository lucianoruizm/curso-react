import styled from "@emotion/styled"

export const CardContainer = styled.li`
    max-width: 200px;
    background: ${( { option, rival }) => option === rival ? 'yellow' : 'skyblue'};
    padding: 10px;
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
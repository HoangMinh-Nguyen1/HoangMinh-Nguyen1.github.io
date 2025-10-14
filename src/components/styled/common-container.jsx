import styled from "styled-components";

export const CommonContainer = styled.div`
    height: 100%;
    box-sizing: border-box;
    background: ${({theme}) => theme.colors.background.primary};
    max-width: 1100px;
    width: 100%;
    padding: 20px 0;
    margin: 0 auto;
    position: relative;

    @media (max-width: 1000px) {
        min-width: 100%;
        padding: 10px 10px;
    }
`;
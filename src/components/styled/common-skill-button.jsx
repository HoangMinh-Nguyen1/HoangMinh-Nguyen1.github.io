import styled from "styled-components";

export const CommonSkillButton = styled.button`
    background-color: transparent;
    //width: 35px;
    padding: 0;
    aspect-ratio: 1 / 1;
    outline: none;
    border: none;
    transition: 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
        height: 100%;
        width: 100%;
        max-height: 100%;
        max-width: 100%;
    }
    
    &:hover {
        transform: scale(1.5);
    }
    &:focus {outline:0;}
`
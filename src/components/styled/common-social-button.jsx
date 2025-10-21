import styled from "styled-components";

export const CommonSocialButton = styled.button`
    background-color: #444243;
    margin: 0;
    padding: 12px;
    outline: none;
    border: none;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;   
    position: relative;
    overflow: hidden;
    transition: 0.2s;
    
    &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background: linear-gradient(0deg, #F9D247, #C9A113);
        opacity: 0;
        top: 0;
        left: 0;
        transition: 0.2s;
    }
    
    &:hover {
        background-color: transparent;
        &::before {
            opacity: 1;
        }
    }

    svg {
        z-index: 1;
        height: 100%;
        width: 100%;
        max-height: 100%;
        max-width: 100%;
    }
    &:focus {outline:0;}

    @media (max-width: 700px) {
        width: 48px;
        height: 48px;
    }
`;
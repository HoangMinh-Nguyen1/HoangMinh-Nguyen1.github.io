import styled from "styled-components";
import {Button} from "antd";

const PrimaryButton = (props) => {
  return (
    <Container>
      <StyledButton {...props}>
        {/* eslint-disable-next-line react/prop-types */}
        {props.children}
      </StyledButton>
    </Container>
  )
}

const Container = styled.div`
`

const StyledButton = styled.button`
    border-radius: ${({theme}) => theme.borderRadius};
    background: linear-gradient(0deg, #F9D247, #C9A113 50%, #fcd95e);
    background-size: 100% 250%;
    background-position: 50% 30%;
    cursor: pointer;
    width: 100%;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    color: black;
    outline: none;
    transition: 0.2s ease-in-out;

    &:hover {
        background-position: 50% 100%;
        color: white !important;
    }
    &:focus {outline:0;}
`

export default PrimaryButton
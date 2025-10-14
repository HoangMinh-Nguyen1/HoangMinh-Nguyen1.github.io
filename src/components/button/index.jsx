import styled from "styled-components";
import {Button} from "antd";

const CustomButton = (props) => {
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
  background: linear-gradient(180deg, rgba(250,250,250), rgba(50,50,50), rgba(15,15,15));
  background-position: 50% 80%;
  background-size: 100% 300%;
  padding: 12px 24px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  border: none;
  color: white;
  outline: none;
  transition: 0.2s;
  &:hover {
    background-position: 50% 0%;
    color: black !important;
  }
  &:focus {outline:0;}
`

export default CustomButton
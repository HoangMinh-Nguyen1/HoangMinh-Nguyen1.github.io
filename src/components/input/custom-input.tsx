import styled from "styled-components";
import {Input} from "antd";

export const CustomInput = (props) => {
  return (
    <StyledInput {...props}/>
  )
};

const StyledInput = styled(Input)`
  border-radius: ${({theme}) => theme.borderRadius};
  padding: 12px 24px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  background-color: #1e1e1e;
  outline: none;
  border: none;
  color: white !important;
  background-color: #1e1e1e;
  box-shadow: none;

  &:hover, &:focus {
      background-color: #1e1e1e;
      box-shadow: none;
  }
    
  &::placeholder {
    color: #666666 !important;
  }
`;
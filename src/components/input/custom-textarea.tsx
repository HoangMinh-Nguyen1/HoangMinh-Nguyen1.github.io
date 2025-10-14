import styled from "styled-components";
import TextArea from "antd/es/input/TextArea";

export const CustomTextarea = (props) => {
  return (
    <StyledTextarea {...props}/>
  )
};

const StyledTextarea = styled(TextArea)`
  border-radius: 30px;
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  height: 100% !important;
  font-size: 16px;
  background-color: #1e1e1e;
  outline: none;
  border: none;
  padding: 12px 24px;
  color: white;
    
  &:hover, &:focus {
    background-color: #1e1e1e;
    box-shadow: none;
  }

  &::placeholder {
      color: #666666 !important;
  }
`;
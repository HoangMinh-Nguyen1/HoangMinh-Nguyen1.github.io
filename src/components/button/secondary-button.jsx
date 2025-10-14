import styled from "styled-components";

const SecondaryButton = (props) => {
  return (
    <Container>
      <StyledButton {...props}>
        <div style={{position: "relative", zIndex: 2}}>
          {/* eslint-disable-next-line react/prop-types */}
          {props.children}
        </div>
      </StyledButton>
    </Container>
  )
}

const Container = styled.div`
`

const StyledButton = styled.button`
    border-radius: ${({theme}) => theme.borderRadius};
    background: #0F0F0F;
    background-size: 100% 250%;
    background-position: 50% 30%;
    cursor: pointer;
    width: 100%;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    color: white;
    outline: none;
    transition: 0.2s ease-in-out;
    position: relative;
    overflow: hidden;

    &::before {
        z-index: 1;
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
        &::before {
            opacity: 1;
        }
    }
    &:focus {outline:0;}
`

export default SecondaryButton
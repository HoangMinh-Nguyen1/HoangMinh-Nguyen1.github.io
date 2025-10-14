import styled, {css} from "styled-components";

// eslint-disable-next-line react/prop-types
const CustomImage = ({src, alt= "", isOverflow = false, style}) => {
  return (
    <Container style={style} isOverflow={isOverflow}>
      {src && <img src={src} alt={alt}/>}
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(50deg, #0F0F0F, #444243);
    border-radius: ${({theme}) => theme.borderRadius};
    position: relative;
    display: flex;
    justify-content: center;
    
    img {
        ${({isOverflow}) => isOverflow !== false ? css`
            height: ${isOverflow};
        ` : css`
            height: 100%;
            object-position: center;
            width: 100%;
        `}
        object-fit: cover;
        position: absolute;
        bottom: 0;
        max-width: 100%;
    }
`;

export default CustomImage
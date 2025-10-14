import styled from "styled-components";
import Menu from "../menu/index.jsx";
import {HiddenScrollbar} from "@/components/styled/hidden-scrollbar.jsx";
import {useMediaQuery} from "react-responsive";


// eslint-disable-next-line react/prop-types
const Layout = ({ ref, frameRefs, onScroll, children }) => {

  return (
    <Container>
      <Content ref={ref} onWheel={onScroll}>
        {children}
      </Content>
      <Menu frameRefs={frameRefs}/>
    </Container>
  )
}

const Container = styled(HiddenScrollbar)`
    position: relative;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 60px;
    gap: 20px;
    overflow: hidden;
    background-color: ${({theme}) => theme.colors.background.primary};
    
    @media (max-width: 1000px) {
        grid-template-columns: none;
        grid-template-rows: 1fr 70px;
        gap: 0;
    }
`

const Content = styled.div`
    padding-left: 20px;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    @media (max-width: 1000px) {
        padding-left: 0;
    }
`



export default Layout
import styled from "styled-components";
import {Tooltip} from "antd";
import {useContext} from "react";
import {ScrollContext} from "@/store/scroll-context.jsx";
import {menuItems} from "@/constants/index.jsx";
import {useMediaQuery} from "react-responsive";
import ScrollUpIcon from "@/assets/images/menu-icon/up.svg?react";

// eslint-disable-next-line react/prop-types
const Menu = ({frameRefs}) => {
  const { currentFrame, setCurrentFrame } = useContext(ScrollContext);

  const handleScroll = (id) => {
    // eslint-disable-next-line react/prop-types
    frameRefs?.[id]?.current?.scrollIntoView({
      behavior: "smooth"
    });
    setCurrentFrame(id);
  };

  const isSmallScreen = useMediaQuery({maxWidth:1000})

  return (
    <Container>
      <MenuContainer>
        {
          menuItems.map((item, index) => {
            return isSmallScreen ? <div>
                <Item active={currentFrame === item.id || (item.id === "home" && currentFrame === null)} onClick={() => handleScroll(item.id)}>
                  {item.icon}
                </Item>
                {/*<PageTitle>{item.title}</PageTitle>*/}
              </div> :
              <Tooltip key={index} title={item.title} placement={"left"} >
                <Item active={currentFrame === item.id || (item.id === "home" && currentFrame === null)} onClick={() => handleScroll(item.id)} style={{marginBottom: index === menuItems.length - 1 ? "0" : "15px"}}>
                  {item.icon}
                </Item>
              </Tooltip>
            }
          )
        }
      </MenuContainer>
      {!isSmallScreen &&
        <ScrollUpButton active={currentFrame !== menuItems[0].id} onClick={() => handleScroll(menuItems[0].id)}>
          <ScrollUpIcon/>
        </ScrollUpButton>
      }
    </Container>
  )
}

const PageTitle = styled.span`
    display: block;
    font-size: 12px;
    font-weight: 600;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    right: 0;
    top: 0;
    width: 60px;
    height: 100%;
    z-index: 1000;

    @media (max-width: 1000px) {
        top: unset;
        bottom: 0;
        height: 70px;
        width: 100%;
    }
`

const MenuContainer = styled.div`
    height: fit-content;
    width: 100%;
    border-radius: 25px 0 0 25px;
    background-color: ${({theme}) => theme.colors.background.secondary};
    padding: 10px;
    box-sizing: border-box;
    z-index: 1000;

    @media (max-width: 1000px) {
        display: flex;
        justify-content: space-around;
        height: 100%;
        border-radius: unset;
    }
`

const Item = styled.a`
    text-decoration: none;
    aspect-ratio: 1 / 1;
    width: calc(100% - 16px);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({active}) => active ? "#F6BA40" : "transparent"};
    padding: 8px;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    
    &:hover {
        background-color: ${({active}) => active ? "#FFDC62" : "rgba(200,200,200,0.2)"};
    }
    
    svg {
        max-width: 100%;
        max-height: 100%;
    }

    @media (max-width: 1000px) {
        width: auto;
        height: calc(100% - 26px);
        padding: 8px;
    }
`

const ScrollUpButton = styled(Item)`
    background-color: #F6BA40;
    opacity: ${({active}) => active ? 1 : 0};
    position: absolute;
    bottom: 20px;
    width: 40px;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 50%;
`;

export default Menu
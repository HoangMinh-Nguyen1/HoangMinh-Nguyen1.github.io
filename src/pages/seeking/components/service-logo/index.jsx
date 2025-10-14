import styled from "styled-components";
import React from "react";

const ServiceLogo = (props) => {
  return (
    <Container {...props}>
      {props.icon}
    </Container>
  )
};

const Container = styled.div`
  height: 50px;
  aspect-ratio: 1 / 1;
  display: flex;
  position: relative;
    
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    background: linear-gradient(142deg, #F9D247, #B27907);
    height: 80%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
  }
    
  svg {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 80%;
    width: auto;
    aspect-ratio: 1 / 1;
  }
`;

ServiceLogo.propTypes = {
  icon: React.Component,
};

export default ServiceLogo;
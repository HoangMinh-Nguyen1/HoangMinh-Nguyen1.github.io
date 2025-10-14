import styled from "styled-components";

export const HiddenScrollbar = styled.div`
  ::-webkit-scrollbar {
      display: none;
  }
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
import styled from "styled-components";

export const FooterContainer = styled.div`
  color: white;
  background-color: black;
  position: relative;
  bottom: 0px;
  width: 100%;
  overflow: hidden;
`;

export const MainContainer = styled.div`
  padding: 0 6.4vw;
`;
export const ContentContainer = styled.div`
    padding:2vw 0;
`;
export const FirstElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  h1{
      display:flex;
      justify-content:center;
  }
`
export const ListUnstyleContainer = styled.ul`
    list-style-type:none;
`
export const SecondElement = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
    padding-right:45px;
`
export const HeadingElement = styled.h1`
  width: 100%;
  height: 1rem;
  color: white;
`;
export const ParagrapeElement = styled.p`
  background-color: white;
`;

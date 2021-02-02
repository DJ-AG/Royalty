import styled from "styled-components";

export const FooterContainer = styled.div`
  color: white;
  background-color: black;
  position: fixed;
  bottom: 0px;
  width: 100%;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    position: relative;
  }
`;

export const MainContainer = styled.div`
  padding: 0 6.4vw;
`;
export const ContentContainer = styled.div`
  padding: 2vw 0;
`;
export const FirstElement = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  
  h1 {
    display: flex;
    justify-content: center;
  }
`;

export const LogoContainer = styled.div`
  padding:20px 0 0 28px;

`

export const SecondElement = styled.div`
  text-align: center;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const HeadingElement = styled.h1`
  width: 100%;
  height: .5rem;
  color: white;
`;
export const ParagrapeElement = styled.p`
  background-color: white;
`;

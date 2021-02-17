import styled from "styled-components";

export const FooterContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  text-align: center;
  color:white;
`;

export const MainContainer = styled.div`
  padding: 0 6.4vw;
`;
export const ContentContainer = styled.div`
  padding: 0.5vw 0;
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

export const LinkContainer = styled.a`
color:white;
text-decoration:none;
cursor: pointer;
&:hover{
  color:gray;
  transition: 200ms ease-out
}
`

export const LogoContainer = styled.div`
padding-top:20px;
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

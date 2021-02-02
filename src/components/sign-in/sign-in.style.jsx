import styled from "styled-components";

export const SignInContainer = styled.div`
  position:relative;
  width: 380px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width:800px){
    width: 95%;
    padding: 0 20px 20px 0px;
    &:after{
    content: '';
    position:absolute;
    left: -10px;
    right: -10px;
    top:23.5rem;
    border-bottom: 15px solid #0005;
    display: block;
    }
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width:800px){
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:5px
  }
`;

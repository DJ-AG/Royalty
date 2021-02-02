import React from "react";

import {
  FooterContainer,
  HeadingElement,
  MainContainer,
  ContentContainer,
  FirstElement,
  SecondElement,
  LogoContainer
} from "./footer.style";

import { ReactComponent as Logo } from "../../assets/vectorpaint.svg";


const Footer = () => (
  <FooterContainer>
    <MainContainer>
      <ContentContainer>
        <FirstElement>
          <HeadingElement>ROYALTY</HeadingElement>
          <LogoContainer>
          <Logo/>

          </LogoContainer>
        </FirstElement>
        <br />
        <hr />
        <SecondElement>
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Royalty | ALL right
            reserved | terms of service | privecy
          </p>
        </SecondElement>
      </ContentContainer>
    </MainContainer>
  </FooterContainer>
);

export default Footer;

import React from "react";

import {
  FooterContainer,
  HeadingElement,
  MainContainer,
  ContentContainer,
  FirstElement,
  SecondElement,
  LogoContainer,
  LinkContainer,
} from "./footer.style";

import { ReactComponent as Logo } from "../../assets/vectorpaint.svg";

const Footer = () => (
  <FooterContainer>
    <MainContainer>
      <ContentContainer>
        <FirstElement>
          <HeadingElement>ROYALTY</HeadingElement>
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </FirstElement>
        <br />
        <hr />
        <SecondElement>
          <p>
            &copy;{new Date().getFullYear()} Royalty | ALL right reserved |
            <LinkContainer> Terms of service</LinkContainer> |<LinkContainer>Privecy</LinkContainer>
          </p>
        </SecondElement>
      </ContentContainer>
    </MainContainer>
  </FooterContainer>
);

export default Footer;

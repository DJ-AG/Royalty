import React from "react";

import {
  FooterContainer,
  HeadingElement,
  MainContainer,
  ContentContainer,
  FirstElement,
  SecondElement,
  ListUnstyleContainer,
} from "./footer.style";

const Footer = () => (
  <FooterContainer>
    <MainContainer>
      <ContentContainer>
        <FirstElement>
          <HeadingElement>Royalty</HeadingElement>
        </FirstElement>
        <br />
        <hr />
        <SecondElement>
          <ListUnstyleContainer>
            <li>Contanct</li>
            <li>mo</li>
            <li> 1254 street </li>
          </ListUnstyleContainer>
          <ListUnstyleContainer>
            <li>Contanct</li>
            <li>mo</li>
            <li> 1254 street </li>
          </ListUnstyleContainer>
        </SecondElement>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Royalty | ALL right
            reserved | terms of service | privecy
          </p>
        </div>
      </ContentContainer>
    </MainContainer>
  </FooterContainer>
);

export default Footer;

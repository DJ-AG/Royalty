import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media screen and (min-width: 1000px) {
    width: 90%;
  }
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 50px;
    &:after {
      content: "";
      position: absolute;
      left: 0px;
      right: 0px;
      top: 95px;
      border-bottom: 1px solid #ccc;
      display: block;
    }
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const RoyaltyText = styled.div`
  margin-left: 4px;
  text-decoration: none;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: gray;
    color: white;
    transition: 0.7s;
  }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../constants/Color";

interface IProps {
  to: string;
}

export const Header = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${colors.Header};
`;

export const WrapLink = styled(Link) <IProps>`
  text-decoration: none;
  color: ${colors.White};
  cursor: pointer;
  margin: 0 10px;
`;

export const Menu = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`;

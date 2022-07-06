import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@mui/material"
import { Colors } from "../../constants/Color"

export const Btn = styled(Button)`
  width: 100%;
`;

export const WrapLink = styled(Link)`
  text-decoration: none;
  color: ${Colors.BgBlue};
  font-size: 30px;
  cursor: pointer;
  margin: 0 auto;
  width:100%;
  height:60px;
`;

export const Wrap = styled.div`
  background-color:${Colors.BGBlack};
  margin: 20px auto;
  width: 100%;

`;
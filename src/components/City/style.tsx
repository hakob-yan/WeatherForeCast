import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@mui/material"
import { colors} from "../../constants/Color"
export const Btn = styled(Button)`
  margin: 40px;
  width: 100%;
`;

export const WrapLink = styled(Link)`
  text-decoration: none;
  color: ${colors.BgBlue};
  font-size: 30px;
  cursor: pointer;
  margin: 20px auto;
`;

export const Wrap = styled.div`
  background-color:${colors.BGBlack};
  margin: 20px auto;
  width: 100%;
`;
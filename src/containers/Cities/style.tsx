import styled from "styled-components";
import cityImg from "../../assets/cities.jpg";
import { FormControl } from "@mui/material";
import { colors } from "../../constants/Color"

export const Form = styled(FormControl)`
  position: relative !important;
  top: 10px;
  right: 10px;
  background-color: ${colors.White};
  width: 500px !important;
`;
export const Div = styled.div`
overflow: auto;
display: flex;
justify-content: center;
position: relative;
height: calc(100vh - 60px);
background-image: url(${cityImg});
`;

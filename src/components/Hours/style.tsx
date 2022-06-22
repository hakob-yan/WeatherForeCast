import styled from "styled-components";
import { colors } from "../../constants/Color"
interface ISrc {
  src: string
}

export const Span = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  transition: 200ms ease;

  &:hover {
    cursor: pointer;
    background-color: ${colors.BgWhite};
  }
`;

export const Title = styled.span`
  margin: 8px 20px;
  padding: 1px 10px;
  font-size: 24px;
  background-color: ${colors.BgWhite};
  color:  ${colors.White};;
  border-radius: 25px;
`;
export const Temp = styled.span`
  margin: 8px 20px;
  padding: 1px 10px;
  font-size: 24px;
  color:  ${colors.White};;
  border-radius: 25px;
`;
export const I = styled.img<ISrc>`
margin:0;
padding:0;
`;
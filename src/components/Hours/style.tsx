import styled from "styled-components";
import { Colors } from "../../constants/Color"

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
      background-color: ${Colors.BgWhite};
  }
`;

export const Title = styled.span`
  margin: 8px 20px;
  padding: 1px 10px;
  font-size: 24px;
  background-color: ${Colors.BgWhite};
  color:  ${Colors.White};;
  border-radius: 25px;
`;

export const Temp = styled.span`
  margin: 8px 20px;
  padding: 1px 10px;
  font-size: 24px;
  color:  ${Colors.White};;
  border-radius: 25px;
`;

export const I = styled.img<ISrc>`
  margin:0;
  padding:0;
`;
import styled from "styled-components";
import { IoIosSunny } from "react-icons/io";

interface ISrc {
  src: string
}

export const Span = styled.span`
  width: 120px; 
   border: 2px solid rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin: 0 2vw;
  transition: 200ms ease;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: 200ms ease;

  &:hover {
    cursor: pointer;
    width:170px;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Title = styled.span`
  margin: 1px 5px;
  margin-top:10px;
  padding: 1px 5px;
  font-size: 24px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 25px;
`;

export const Temp = styled.span`
  margin: 3px 20px;
  padding: 1px 10px;
  font-size: 22px;
  color: white;
  border-radius: 25px;
`;

export const Icon = styled(IoIosSunny)`
  border-top: 1px solid white;
  border-bottom: 1px solid white;
`;

export const I = styled.img<ISrc>`
  margin:0;
  padding:0;
`;

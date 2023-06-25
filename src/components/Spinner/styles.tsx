import styled from "styled-components"
import { keyframes } from 'styled-components';
import Icon from "../../assets/spinner.png"


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const wrapper = styled.div`
    width:100%;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items:center;

`
export const img = styled.div`
    width:100px;
    height:100px;
    background-image:url('${Icon}');
    background-size: contain;
    background-position:center;
    background-repeat:no-repeat;
    animation: 2s ease ${rotate};
    animation-iteration-count: infinite;
   
`

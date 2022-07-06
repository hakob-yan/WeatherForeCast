import styled, { css } from "styled-components";
import { Colors } from "../../constants/Color";


export const Image = styled.div<{ $url: string }>(({ $url }) => css`
  width: 100%;
  padding-bottom:20px;
  margin: 0 auto;
  background-image: url(${$url}) !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  transition: all 300ms ease;
`)

export const Container = styled.div`
  width:80%;
  position: relative;
  margin: 0 auto;
`;

export const TopLayOut = styled.div`
  display: flex;
  background-color: ${Colors.BGBlack};
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;
export const H1 = styled.h1`
  display: inline;
  padding-top: 0px;
  padding-left: 20px;
  color: ${Colors.White};
  font-weight: 100;
  font-size: 4vw;
  text-shadow: 5px 5px 2px ${Colors.ShadowBlue};
`;

export const H3 = styled.h3`
  display: inline;
  font-weight: 800;
  font-size: 1.8vw;
  color: transparent;
  text-shadow: 0px 0 1px ${Colors.BgWhite};
`;

export const Temp = styled(H1)`
  display: inline;
  padding-bottom: 1vh;
  padding-left: 20px;
  color: ${Colors.White};
  font-weight: 100;
  font-size: 4vw;
  text-shadow: 5px 5px 2px ${Colors.ShadowBlue};
`;
export const IsSunny = styled.div`
 padding-top:1vh;
`;

export const Weather = styled.div`
  display: flex;
  margin-left: 4vw;
  padding-bottom: 50px;
`;

export const BottomLayOut = styled.div`
  padding:10px;  
  margin-top: 5vh;
  background-color: ${Colors.BGBlack};
  border-radius:50px;
`;

export const DaysHeader = styled.ul`
  overflow: auto;
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 10px auto;
  padding: 30px;
  max-width:900px;
  ::-webkit-scrollbar {
    height: 8px;
    border-radius: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: 0;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${Colors.BGBlack};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${Colors.BGBlack};
    border-radius: 10px;
  }
`;

export const DaysHours = styled.li`
  width: 100%;

 
  border-left: 1px solid ${Colors.White};
  background-color: ${Colors.BGBlack};
`;
export const HoursHeader = styled.ul`
 overflow: auto;
  margin:2vh auto;
  max-width:1500px;
  padding:0;
  list-style: none;
  display: flex;
  height:300px;
  

  /* width */
  ::-webkit-scrollbar {
    height: 8px;
    width: 1px;
    border-radius: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: 0;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${Colors.BGBlack};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${Colors.BgWhite};
    border-radius: 10px;
  }
`;

interface ISrc {
  src: string
}
export const I = styled.img<ISrc>`
margin:0;
padding:0;
width: 10vw;
height: 10vw;
`;

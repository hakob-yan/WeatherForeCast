import styled, { css } from "styled-components";
import { colors } from "../../constants/Color";


export const Image = styled.div<{ $url: string }>(({ $url }) => css`
  width: 100%;
  padding-bottom:20px;
  min-height: 700px;
  margin: 0 auto;
  background-image: url(${$url}) !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  transition: all 300ms ease;
`)

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const H = styled.div`
  display: flex;
  background-color: ${colors.BGBlack};
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;
export const H1 = styled.h1`
  display: inline;
  padding-top: 1vh;
  padding-bottom: 1vh;
  padding-left: 20px;
  color: ${colors.White};
  font-weight: 100;
  font-size: 7vw;
  text-shadow: 5px 5px 2px ${colors.ShadowBlue};
`;

export const H3 = styled.h3`
  display: inline;
  font-weight: 800;
  font-size: 1.8vw;
  color: transparent;
  text-shadow: 0px 0 1px ${colors.BgWhite};
`;

export const Temp = styled(H1)`
 display: inline;
  padding-top: 1vh;
  padding-bottom: 1vh;
  padding-left: 20px;
  color: ${colors.White};
  font-weight: 100;
  font-size: 7vw;
  text-shadow: 5px 5px 2px ${colors.ShadowBlue};
`;
export const IsSunny = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Weather = styled.div`
  display: flex;
  margin-left: 4vw;
  padding-bottom: 50px;
`;

export const Days = styled.div`
  padding: 50px;
  margin-top: 5vh;
  width: 100%;
  background-color: ${colors.BGBlack};
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const DaysHeader = styled.ul`
  overflow: auto;
  list-style: none;
  display: flex;
 
  justify-content: center;
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
    background: ${colors.BGBlack};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.BGBlack};
    border-radius: 10px;
  }
`;
export const Wrap = styled.span``;
export const DaysDays = styled.li`
  width: 100%; 
  border: 2px solid ${colors.White};
  background-color:${colors.BGBlack};
  border-radius: 10px;
  margin: 0 2vw;
  transition: 200ms ease;
  &:hover {
    box-shadow: 0 0 20px ${colors.BGBlack};
  }
`;
export const DaysHours = styled.li`
  width: 200px;

 
  border-left: 1px solid ${colors.White};
  background-color: ${colors.BGBlack};
`;
export const HoursHeader = styled.ul`
  overflow: auto;
  list-style: none;
  margin-top: 2vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height:300px;
  background-color: ${colors.BGBlack};

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
    background: ${colors.BGBlack};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.BgWhite};
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

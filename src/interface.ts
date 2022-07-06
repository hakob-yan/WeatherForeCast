import rain from "./assets/rain.jpg";
import clear from "./assets/clear.jpg";
import clouds from "./assets/sun.jpg";
import snow from "./assets/snow.jpg";

export interface IProps {
    country: string
    lat: string
    lng: string
    name: string
}
export interface IDays {
  date: string,
  temp: string | undefined|number,
  main: string,
  icon: string,
  key?: string,
  isClicked:boolean,
 }

 export interface IHours {
  hour: string,
  temp: string | undefined|number,
  main: string,
  icon: string,
  key?: string,
}

export enum EWeatherBg {
  Snow = 'Snow',
  Rain = 'Rain',
  Clear = 'Clear',
  Clouds = 'Clouds',
  Default = 'Default',
}

export const WeatherBackgrounds = {
  [EWeatherBg.Default]: '',
  [EWeatherBg.Rain]: rain,
  [EWeatherBg.Clear]: clear,
  [EWeatherBg.Snow]: snow,
  [EWeatherBg.Clouds]: clouds,
}

export interface ICity {
  lat: string
  lng: string
  name: string
  day: number
  dt_txt?: string
  main?: string
  weather?: string
  country?: string;
}
export interface IWeather {
    main: string;
    icon: string;
}

export interface IProps {
    dt_txt: string,
    main: {
        temp: number;
        temp_max: number;
        temp_min: number;
    }
    weather: IWeather[]
}

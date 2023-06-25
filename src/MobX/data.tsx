import { IHours } from "../interface"
import { ICity } from "../interface"
import { IDays} from "../interface"


const dHoursData: IHours = {
  hour: "22-05",
  main: "",
  temp: "55",
  icon: "01d"
}

const dDaysData: IDays = {
  date: "22-05",
  main: "",
  temp:"65",
  icon: "01d",
  isClicked: false,
}

export const dDays: IDays[] = [
  dDaysData,
]

export const dHours: IHours[] = [
  dHoursData,
];

export const cities: ICity = {
  name: 'null',
  lat: "null",
  lng: "null",
  day: 0
};

export const temp = {
  celsius: true,
  fahrenheit: false,
};
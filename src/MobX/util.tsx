import store from "./store"
import { TemperatureSign } from "../constants/Temperature"
import { IWeatherDataItem } from "../interface"
import { DayMilliseconds } from "../constants/Temperature"
import { DayDif } from "../constants/Temperature"
import { DocDay } from "../constants/Temperature"
import moment from "moment"

const kelToCel = (temp: number): number => {
    return temp - 273;
}

const arrFilter = (arr: IWeatherDataItem[]) => {
    return arr.filter((_elem, i, arr) => {
        const currentItemDate = new Date(arr[i].dt_txt).getDate();
        const nextItemMilliseconds = Date.now() + store.cities.day * DayMilliseconds;
        const nextItemDate = new Date(nextItemMilliseconds).getDate();

        return currentItemDate === nextItemDate;
    })
}

export const weatherChange = (arr: IWeatherDataItem[]): void => {
    const arr2 = arrFilter(arr);

    store.dHours = arr2.map((elem) => {
        const { main, icon } = elem.weather[0]

        return {
            main,
            icon,
            hour: moment(elem.dt_txt).format("hh:mm a"),
            temp: Math.round(kelToCel(elem.main.temp))
        }
    })
    for (let i = 0; i < DocDay; i++) {
        const item = arr[i * DayDif];

        store.dDays[i] = {
            date: `${moment(item.dt_txt).format('dddd').slice(0, 3)}`,
            main: item.weather[0].main,
            icon: item.weather[0].icon,
            temp: Math.round(kelToCel(item.main.temp)),
            isClicked: false,
        }
    }
};


export const cToFahr = (celsius: number | string | undefined): string => {
    if (store.temp.celsius) {
        return celsius + TemperatureSign.Celsius;
    }

    if (store.temp.fahrenheit) {
        const cTemp = celsius === undefined ? 0 : Number(celsius)
        const cToFahr = Number(cTemp) * 9 / 5 + 32;

        return cToFahr + TemperatureSign.Fahrenheit;
    }

    return '-';
}


export const Api = (lat: string, lng: string): string => {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=fe68210f5cb22cd19f84c8549e9def4f`
}
export const Icon = (icon: string): string => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
}

export const Location = (): string => {
    return `https://ipapi.co/json`
}
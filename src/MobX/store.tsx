import { makeAutoObservable } from "mobx"
import { Temper } from "../constants/Temperature"
import { weatherChange } from "./util";
import { dHours, dDays, cities, temp } from "./data"




class Store {
  temp = temp;
  cities = cities
  dDays = dDays;
  dHours = dHours;
  weatherChange = weatherChange;
  addedCities = [];

  addCities(arr: any) {
    this.addedCities = arr;
  }

  changeCoord(lat: string, lng: string, name: string): void {
    this.cities.name = name;
    this.cities.lat = lat;
    this.cities.lng = lng;
  }

  changeTemp(evt: React.ChangeEvent<HTMLInputElement>): void {
    switch (evt.target.value) {
      case Temper.Celsius: {
        this.temp.celsius = true;
        this.temp.fahrenheit = false;
        break;
      }

      case Temper.Fahrenheit: {
        this.temp.celsius = false;
        this.temp.fahrenheit = true;
        break;
      }
    }
  }


  changeDay(index: number): void {
    this.cities.day = index;
  }

  constructor() {
    makeAutoObservable(this);
  }
}
export default new Store();

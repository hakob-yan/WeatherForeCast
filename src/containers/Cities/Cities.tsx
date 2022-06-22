import React, { ChangeEvent, useMemo } from 'react';
import * as Style from './style';
import { useState } from "react";
import cit from 'cities.json';
import { uniq, compact } from 'lodash';
import { Stack, Autocomplete, TextField, Button } from "@mui/material"
import store from "../../MobX/store"
import { City } from '../../components/City/city';
import { ICity } from "../../interface"
import moment from 'moment';
interface IProps {
  name: string
}

const cities: any = cit; // TODO check any type, try to avoid it


export const Cities = () => {
  const [data, setData] = useState(cities.slice(0, 10));
  const [value, setValue] = useState<ICity | null>(data[0]);
  const [city, setCity] = useState<ICity[]>(store.addedCities);


  const handle = (name: string) => {
    const arr = cities.filter((elem: IProps, i: number) => elem.name.startsWith(name.charAt(0).toUpperCase() + name.slice(1))).slice(0, 10) // divide into simpler parts
    setData(arr)
  }
  const handleStack = (e: ChangeEvent<HTMLInputElement>) => {
    handle(e.target.value)
  };
  const handleOption = (option: ICity) => `${option.name}-lat:${option.lat} lon:${option.lng}`

  const handleComplete = (event: any, newValue: ICity | null) => {
    setValue(newValue);
  }

  const handleInput = (params: any) => <TextField {...params} variant="outlined" label="Cities" />
  const handleClick = () => {
    const newCities = uniq(compact([value, ...city]));
    store.addCities(newCities);
    setCity(newCities);
  }

  const mapCity = useMemo(() => city.map((elem, i) => <City key={`citi-${i}`} {...elem} />), [city]);

  return (
    <Style.Div>
      <Stack onChange={handleStack} >
        <Autocomplete
          value={value}
          onChange={handleComplete}
          id="custom-autocomplete"
          options={data}
          style={{ width: 350, margin: 20 }}
          getOptionLabel={handleOption} //filter value
          renderInput={handleInput} />
        <Button style={{ width: "150px", margin: "0 auto" }}
          variant="contained"
          onClick={handleClick}
        >
          Add city
        </Button>
        {mapCity}
      </Stack>
    </Style.Div >
  );
};

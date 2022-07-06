import React, { ChangeEvent, SyntheticEvent, useMemo } from 'react';
import * as Style from './style';
import { useState } from "react";
import cit from 'cities.json';
import { uniq, compact } from 'lodash';
import { Stack, Autocomplete, TextField, Button, TextFieldProps } from "@mui/material";
import { ICityData } from '../../interface';
import store from "../../MobX/store";
import { City } from '../../components/City/city';

interface IProps {
  name: string
}

const cities = cit as ICityData[];

export const Cities: React.FC = () => {
  const [data, setData] = useState(cities.slice(0, 10));
  const [value, setValue] = useState<ICityData | null>(data[0]);
  const [city, setCity] = useState<ICityData[]>(store.addedCities);

  const handle = (name: string) => {
    const arr = cities.filter((elem: IProps, i: number) => elem.name.startsWith(name.charAt(0).toUpperCase() + name.slice(1))).slice(0, 10)
    setData(arr)
  }
  const handleStack = (e: ChangeEvent<HTMLInputElement>) => {
    handle(e.target.value)
  };

  const handleOption = (option: ICityData) => `${option.name}-lat:${option.lat} lon:${option.lng}`

  const handleComplete = (_event: SyntheticEvent<Element, Event>, newValue: ICityData | null) => {
    setValue(newValue);
  }

  const handleInput = (params: TextFieldProps) => <TextField {...params} variant="outlined" label="Cities" />

  const handleClick = () => {
    const newCities = uniq(compact([value, ...city]));
    store.addCities(newCities);
    setCity(newCities);
  }

  const mapCity = useMemo(() => city.map((item, i) => <City key={`citi-${i}`} {...item} />), [city]);

  return (
    <Style.Div>
      <Stack onChange={handleStack} >
        <Autocomplete
          value={value}
          onChange={handleComplete}
          id="custom-autocomplete"
          options={data}
          style={{ minWidth: 300, margin: 20 }}
          getOptionLabel={handleOption}
          renderInput={handleInput}
        />
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

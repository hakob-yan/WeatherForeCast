import React from "react";
import * as Style from "./style";
import { observer } from "mobx-react-lite";
import store from "../../MobX/store";
import { Temper } from "../../constants/Temperature"
import { TemperatureSign } from "../../constants/Temperature"


export const Temp: React.FC = observer(() => {
  const handleRadio = (evt: React.ChangeEvent<HTMLInputElement>) => {
    store.changeTemp(evt)
  };

  return (
    <Style.Temp>
      <label>
        <input
          onChange={handleRadio}
          type="radio"
          value={Temper.Celsius}
          name="temperature"
          checked={store.temp.celsius}
        />
        {TemperatureSign.Celsius}
      </label>
      <label>
        <input
          onChange={handleRadio}
          type="radio"
          value={Temper.Fahrenheit}
          name="temperature"
          checked={store.temp.fahrenheit}
        />
        {TemperatureSign.Fahrenheit}
      </label>
    </Style.Temp>
  );
});

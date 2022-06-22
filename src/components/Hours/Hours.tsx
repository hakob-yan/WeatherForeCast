import React from "react";
import * as Style from "./style";
import { IHours } from "../../interface"
import {Icon} from "../../MobX/util"

export const Hours = ({ hour, temp, main, icon }: IHours) => {
  return (
    <Style.Span>
      <Style.Title>{hour}</Style.Title>
      <Style.I src={Icon(icon)}></Style.I>
      <Style.Temp>{temp}</Style.Temp>
    </Style.Span>
  );
};

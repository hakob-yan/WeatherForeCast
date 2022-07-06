import React from "react";
import * as Style from "./style";
import { IHours } from "../../interface"
import { Icon } from "../../MobX/util"

export const Hours: React.FC<IHours> = ({ hour, temp, icon }) => (
  <Style.Span>
    <Style.Title>{hour}</Style.Title>
    <Style.I src={Icon(icon)}></Style.I>
    <Style.Temp>{temp}</Style.Temp>
  </Style.Span>
);

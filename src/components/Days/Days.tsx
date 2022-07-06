import React from "react";
import { IDays } from "../../interface"
import * as Style from "./style";
import { Icon } from "../../MobX/util"

export const Days: React.FC<IDays> = ({ date, temp, icon, isClicked }) => (
  <Style.Block isClicked={isClicked} >
    <Style.Title>{date}</Style.Title>
    <Style.I src={Icon(icon)}></Style.I>
    <Style.Temp>{temp}</Style.Temp>
  </Style.Block>
);

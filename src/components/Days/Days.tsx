import React from "react";
import { IDays} from "../../interface"
import * as Style from "./style";
import { Icon } from "../../MobX/util"

export const Days = ({ date, temp, main, icon }: IDays) => {
  
  return (
    <Style.Span>
      <Style.Title>{date}</Style.Title>
      <Style.I src={Icon(icon)}></Style.I>
      <Style.Temp>{temp}</Style.Temp>
    </Style.Span>
  );
};

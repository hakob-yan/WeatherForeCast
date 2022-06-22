import React from 'react'
import * as Style from "./style"
import store from "../../MobX/store"
import { Pages } from "../../constants/Route"
import { ICity } from "../../interface"


export const City = ({ country, name, lat, lng }: ICity) => {

    const handleBtn = () => {
        store.changeCoord(lat, lng, name)
    }

    return (
        <Style.Wrap>
            <Style.Btn
                variant="outlined"
                onClick={handleBtn}
                size="medium"
            >
                <Style.WrapLink to={Pages.Home} >{name}</Style.WrapLink>
            </Style.Btn>
        </Style.Wrap >
    )
}
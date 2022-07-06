import React from 'react'
import * as Style from "./style"
import store from "../../MobX/store"
import { Pages } from "../../constants/Route"
import { ICity } from "../../interface"

interface ICityProps {
    lat: string;
    lng: string;
    name: string;
}

export const City: React.FC<ICityProps> = ({ name, lat, lng }) => {
    const handleBtn = () => {
        store.changeCoord(lat, lng, name)
    }

    return (
        <Style.Wrap onClick={handleBtn}>
            <Style.Btn
                style={{ padding: 0 }}
                variant="outlined"
                size="medium"
            >
                <Style.WrapLink to={Pages.Home} >{name}</Style.WrapLink>
            </Style.Btn>
        </Style.Wrap >
    )
}
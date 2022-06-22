import { cToFahr } from "../../MobX/util"
import store from "../../MobX/store";
import * as Style from "./style";
import { Days } from "../../components/Days/Days";
import { Hours } from "../../components/Hours/Hours";

export const Day = () => {
    return <>
        {store.dDays.map((_item, index) => {
            const { date, temp, main, icon } = store.dDays[index];

            const handleClick = () => {
                store.changeDay(index)
            };

            return (
                <Style.Wrap key={`day-${index}`} onClick={handleClick}>
                    <Days date={date} temp={cToFahr(temp)} main={main} icon={icon} />
                </Style.Wrap>
            );
        })}
    </>
}

export const Hour = () => {
    return <>
        {store.dHours.map((elem, i, arr) => {
            const { hour, temp, main, icon } = store.dHours[i];
            return (
                <Style.DaysHours key={`hour-${i}`}>
                    <Hours
                        hour={hour}
                        main={main}
                        icon={icon}
                        temp={cToFahr(temp)}
                    />
                </Style.DaysHours>
            )
        })}
    </>
}

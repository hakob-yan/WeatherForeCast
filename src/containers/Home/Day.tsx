import { cToFahr } from "../../MobX/util"
import store from "../../MobX/store";
import * as Style from "./style";
import { Days } from "../../components/Days/Days";
import { Hours } from "../../components/Hours/Hours";

export const Day = () => <>
    {store.dDays.map((item, index) => {
        const { date, temp, main, icon } = store.dDays[index];

        const handleClick = () => {
            store.changeDay(index);
        };

        return (
            <li key={`day-${item.date}`} onClick={handleClick}>
                <Days isClicked={index === store.cities.day} date={date} temp={cToFahr(temp)} main={main} icon={icon} />
            </li>
        );
    })}
</>

export const Hour: React.FC = () => <>
    {store.dHours.map((item, index) => {
        const { hour, temp, main, icon } = store.dHours[index];

        return (
            <Style.DaysHours key={`hour-${item.hour}`}>
                <Hours
                    hour={hour}
                    main={main}
                    icon={icon}
                    temp={cToFahr(temp)}
                />
            </Style.DaysHours>
        );
    })}
</>

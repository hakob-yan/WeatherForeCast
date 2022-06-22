import { useEffect } from "react";
import { observer } from "mobx-react-lite"
import { Day } from "./Day";
import { Hour } from "./Day";
import store from "../../MobX/store";
import * as Style from "./style";
import { cToFahr } from "../../MobX/util"
import { Api } from "../../MobX/util"
import { Icon } from "../../MobX/util"
import { EWeatherBg } from "../../interface"
import { WeatherBackgrounds } from "../../interface"

export const Home: React.FC = observer(() => {
  const imageKey = store.dDays[0].main as EWeatherBg;
  const imageBackground = WeatherBackgrounds[imageKey] || WeatherBackgrounds.Default;
  const { lng, lat, day, name } = store.cities;
  const { temp, icon } = store.dDays[0];

  useEffect(() => {
    const fetchList = async () => {
      try {
        const data = await fetch(Api(lat, lng));
        const { list } = await data.json();
        store.weatherChange(list);
      } catch (err) {
        alert(err);
      }
    }

    fetchList();
  }, [lng, lat, day]);

  return (
    <Style.Image $url={imageBackground}>
      <Style.Container>
        <Style.H>
          <Style.H1>{name}</Style.H1>
          <Style.Weather>
            <Style.IsSunny>
              <Style.I src={Icon(icon)}></Style.I>
            </Style.IsSunny>
            <Style.Temp> {cToFahr(temp)}</Style.Temp>
          </Style.Weather>
        </Style.H>
        <Style.Days>
          <Style.DaysHeader>
            <Day />
          </Style.DaysHeader>
          <Style.HoursHeader>
            <Hour />
          </Style.HoursHeader>
        </Style.Days>
      </Style.Container>
    </Style.Image>
  );
})

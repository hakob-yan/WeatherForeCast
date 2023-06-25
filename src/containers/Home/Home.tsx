import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite"
import { Spinner } from "../../components/Spinner/index"
import { Day } from "./Day";
import { Hour } from "./Day";
import store from "../../MobX/store";
import * as Style from "./style";
import { cToFahr } from "../../MobX/util"
import { Api, Location, Icon } from "../../MobX/util"
import { EWeatherBg } from "../../interface"
import { WeatherBackgrounds } from "../../interface"

export const Home: React.FC = observer(() => {
  const [isLoaded, setLoaded] = useState<boolean>(false);
  const imageKey = store.dDays[0].main as EWeatherBg;
  const imageBackground = WeatherBackgrounds[imageKey] || WeatherBackgrounds.Default;
  const { lng, lat, day, name } = store.cities;
  const { temp, icon } = store.dDays[0];
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const data = await fetch(Location());
        const { region, latitude, longitude } = await data.json();
        store.changeCoord(latitude, longitude, region);
        setLoaded(true)

      } catch (err) {
        console.log(err);
        ;
      }
    }
    if (lng == 'null' && lat == 'null') fetchLocation()

  }, [])
  useEffect(() => {
    const fetchList = async () => {
      try {
        const data = await fetch(Api(lat, lng));
        const { list } = await data.json();
        store.weatherChange(list);
        setLoaded(true)

      } catch (err) {
        console.log(err);

      }
    }

    fetchList();

  }, [lng, lat, day]);
  if (!isLoaded) {
    return <Spinner />
  }
  return (
    <Style.Image $url={imageBackground}>
      <Style.Container>
        <Style.TopLayOut>
          <Style.H1>{name}</Style.H1>
          <Style.Weather>
            <Style.IsSunny>
              <Style.I src={Icon(icon)}></Style.I>
            </Style.IsSunny>
            <Style.Temp> {cToFahr(temp)}</Style.Temp>
          </Style.Weather>
        </Style.TopLayOut>
        <Style.BottomLayOut>
          <Style.DaysHeader>
            <Day />
          </Style.DaysHeader>
          <Style.HoursHeader>
            <Hour />
          </Style.HoursHeader>
        </Style.BottomLayOut>
      </Style.Container>
    </Style.Image>
  );
})

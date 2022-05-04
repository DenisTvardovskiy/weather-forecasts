import './style.sass'
import FiveDayWeatherCast from "../../components/Five-day-weather-cast/Five-day-weather-cast";
import TodayWeather from "../../components/Today-weather/Today-weather";

export default function Home(props: any) {
    return (
        <div className="home-body">
            <TodayWeather/>

            <FiveDayWeatherCast/>

        </div>
    )
}
import WeatherCard from "../Weather-card/Weather-card";

export default function TodayWeather(props: any) {

    return (
        <>
            <h3>Today</h3>
            <WeatherCard data = {props.todayWeather[0]}/>
        </>
    )
}
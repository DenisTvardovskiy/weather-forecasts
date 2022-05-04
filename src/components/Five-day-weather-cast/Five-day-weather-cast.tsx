import WeatherCard from "../Weather-card/Weather-card";

export default function FiveDayWeatherCast(props:any) {
    return (
        <>
            <h3>Next 5 days</h3>
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
        </>
    )
}
import WeatherCard from "../Weather-card/Weather-card";

export default function FiveDayWeatherCast(props:any) {
    props.weekWeather.map((item:any)=> {
        return console.log(item)
    })
    return (
        <>
            <h3>Next 5 days</h3>
            {
                props.weekWeather.map((item:any)=> {
                    return console.log(item)
                })
            }
            {/*<WeatherCard/>*/}
            {/*<WeatherCard/>*/}
            {/*<WeatherCard/>*/}
            {/*<WeatherCard/>*/}
            {/*<WeatherCard/>*/}
        </>
    )
}
import WeatherCard from "../Weather-card/Weather-card";
import "./style.sass"

export default function FiveDayWeatherCast({weekWeather}:any) {
    if(weekWeather.length >5){
        weekWeather.shift()
    }
    return (
        <>
            <h3>Next 5 days</h3>
            <div className={"weather-grid"}>
                {
                    weekWeather.map((item:any)=> {
                        if(item.length >=3){
                            return <WeatherCard key={item[2].main.temp} data={item[2]}/>
                        }
                        else {
                            return  <WeatherCard key={item[0].main.temp} data={item[0]}/>
                        }
                    })
                }
            </div>

        </>
    )
}
import './style.sass'
import FiveDayWeatherCast from "../../components/Five-day-weather-cast/Five-day-weather-cast";
import TodayWeather from "../../components/Today-weather/Today-weather";
import {useEffect, useState} from "react";
import {ILocation} from "../../components/Permission-pop-up/Permission-pop-up";

export default function Home(props: any) {

    const [weather, setWeather] = useState<{current?: any; daily?: any}>({})

    const getWeather = async (lat: string|number, lon: string|number) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_ACCESS_KEY}`);
        const quotesArray = await res.json();
        setWeather(quotesArray);
        console.log(quotesArray)
    }

    useEffect(()=>{
        const cityData: ILocation = JSON.parse(localStorage.getItem('location')as string) as ILocation
        console.log(cityData &&  cityData.lat && cityData.lon)
        if(cityData && cityData.lat && cityData.lon) {
            getWeather(cityData.lat, cityData.lon)
        }

    }, [])

    return weather.current?(
        <div className="home-body">
            <TodayWeather todayWeather={weather.current}/>

            <FiveDayWeatherCast weekWeather={weather.daily}/>

        </div>
    ): null
}
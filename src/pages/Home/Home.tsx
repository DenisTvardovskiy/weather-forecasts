import './style.sass'
import FiveDayWeatherCast from "../../components/Five-day-weather-cast/Five-day-weather-cast";
import TodayWeather from "../../components/Today-weather/Today-weather";
import {useEffect, useState} from "react";
import {ILocation} from "../../components/Permission-pop-up/Permission-pop-up";

export default function Home(props: any) {

    const [sortedData, setSortedData] = useState([])

    const getWeather = async (lat: string|number, lon: string|number) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_ACCESS_KEY}`);
        const quotesArray = await res.json();
        const dayArray = Array.from(new Set(quotesArray.list.map((item: any) => {
            return   new Date(item.dt_txt).getDate()
        })))

        const filteredDataDayByDay:any = dayArray.map((day)=>{
            return  quotesArray.list.filter((item:any)=>{
                return new Date(item.dt_txt).getDate() === day
            })
        })

        setSortedData(filteredDataDayByDay)
    }

    useEffect(()=>{
        const cityData: ILocation = JSON.parse(localStorage.getItem('location')as string) as ILocation
        if(cityData && cityData.lat && cityData.lon) {
            getWeather(cityData.lat, cityData.lon)
        }

    }, [])

    return sortedData.length?(
        <div className="home-body">
            <TodayWeather todayWeather={sortedData[0]}/>

            <FiveDayWeatherCast weekWeather={sortedData}/>

        </div>
    ): null
}
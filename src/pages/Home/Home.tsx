import './style.sass'
import FiveDayWeatherCast from "../../components/Five-day-weather-cast/Five-day-weather-cast";
import TodayWeather from "../../components/Today-weather/Today-weather";
import React, {useEffect, useState} from "react";
import {ILocation} from "../../components/Permission-pop-up/Permission-pop-up";
import Header from "../../components/Header/Header";
import { getWeather } from '../../services/weather.service';

export default function Home(props: any) {

    const [sortedData, setSortedData] = useState([])
    const [foundData, setFoundData] = useState<ILocation>({})

    const filterWeatherByDay = (array: any, day: number)=> {
        return array.filter((item:any)=>{
            return new Date(item.dt_txt).getDate() === day
        })
    }

    const getDayArray = (arr: any) => {
       return  Array.from(new Set(arr.map((item: any) => {
            return new Date(item.dt_txt).getDate()
        })))
    }

    useEffect(()=>{
        const cityData: ILocation = JSON.parse(localStorage.getItem('location')as string) as ILocation
        setFoundData(cityData)

    }, [])

    useEffect(()=>{
        if(foundData && foundData.lat && foundData.lon) {
            getWeather(foundData.lat, foundData.lon).then((res)=>{
                    const dayArray = getDayArray(res.list)

                    const filteredDataDayByDay:any = dayArray.map((day: any)=>{
                        return filterWeatherByDay(res.list, day)
                    })

                    setSortedData(filteredDataDayByDay)
                }
            )
        }
    }, [foundData])

    return sortedData.length?(
        <div className="home-body">
            <Header setFoundData={setFoundData}/>
            <TodayWeather todayWeather={sortedData[0]}/>

            <FiveDayWeatherCast weekWeather={sortedData}/>

        </div>
    ): null
}
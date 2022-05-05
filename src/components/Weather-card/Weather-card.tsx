
import './style.sass'
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export  default  function WeatherCard({data} :any){
    const [location, setLocation] = useState<any>({})

    useEffect(()=>{
       setLocation(JSON.parse(localStorage.getItem("location") as string))
    },[])

    return location.lat? (
        <Link
            className={"link"}
            to={{
                pathname: "/more-info",
                search: `?lat=${location.lat}&lon=${location.lon}&dt=${new Date(data.dt_txt).getDate()}`
            }}
            >
            <div className="card-body">
                <div className="day-info">
                    <p className="week-day">{new Date(data?.dt_txt).toLocaleDateString('en-Us', {weekday: 'long'})}</p>
                    <p className="date">{new Date(data?.dt_txt).toLocaleDateString('en-Us', {month: 'long', day: 'numeric'})}</p>
                    <img className="weather-indicator" alt='thunder' src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}/>
                </div>
                <div className="weather-info">
                    <p className="type">{data?.weather[0]?.main}</p>
                    <p className="temperature">{data?.main?.temp} &#8451;</p>
                </div>
            </div>
        </Link>

    ):null
}
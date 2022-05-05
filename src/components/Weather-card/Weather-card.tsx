
import './style.sass'
import React, {useEffect} from "react";

export  default  function WeatherCard({data} :any){
    return (
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
    )
}
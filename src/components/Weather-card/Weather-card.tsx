
import './style.sass'
import React from "react";

export  default  function WeatherCard(props:any){
    return(
        <div className="card-body">
            <div className="day-info">
                <p className="week-day">Wednesday</p>
                <p className="date">May 04</p>
                <img className="weather-indicator" alt='thunder' src={'http://openweathermap.org/img/wn/02d@2x.png'}/>
            </div>
            <div className="weather-info">
                <p className="type">Thunder</p>
                <p className="temperature">20 &#8451;</p>
            </div>
        </div>
    )
}
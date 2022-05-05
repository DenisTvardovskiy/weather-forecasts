import {Link} from "react-router-dom";
import './style.sass'
import Slider from "react-slick";
import React, {useEffect, useState} from "react";
import queryString from 'query-string'
import {getWeather} from "../../services/weather.service";

export default function MoreInfo(props:any) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1
    };

    const value = queryString.parse(window.location.search);
    const [sortedData, setSortedData] = useState([])
    const [currentData, setCurrentData] = useState<any>({})
    const [cityName, setCityName] = useState('N/a')

    useEffect(()=>{
        if(value && value.lat && value.lon) {
            getWeather((value.lat as string),(value.lon as string)).then((res:any)=>{
                const filteredDataDayByDay = res.list.filter((item:any)=> {
                            if(value.dt){
                                return new Date(item.dt_txt).getDate() === +value?.dt
                            }
                        })

                        setCityName(res.city.name)
                        setSortedData(filteredDataDayByDay)
                        setCurrentData(filteredDataDayByDay[0])
            })
        }

    }, [])

    const getWindDirection = (deg: number) => {
            const val = Math.floor((deg / 22.5) + 0.5);
            const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
            return arr[(val % 16)];

    }

    return sortedData.length ? (
        <div className={"more-info-body"}>
            <section className={"head"}>
                <Link to={"/"}>Go back home</Link>
            </section>
            <div>
                <Slider {...settings}>
                    <div className={" slide-box"}>
                        <div className={"temp weather-info-box"}>
                            <img  alt='thunder' src={`http://openweathermap.org/img/wn/${currentData?.weather[0]?.icon}@2x.png`} className={"temp-icon"}/>

                            <p className={"title"}>{cityName}</p>
                            <p className={"value"}>{Math.round(currentData.main?.temp)} &#8451;</p>
                            <p className={"description"}>{currentData?.weather[0]?.main}</p>
                        </div>
                    </div>
                    <div className={"wind slide-box"}>
                        <div className={"weather-info-box"}>
                            <img  alt='thunder' src={'./assets/wind.png'} className={"wind-icon"}/>
                            <p className={"title"}>Wind</p>
                            <p className={"value"}>{currentData.wind.speed}<span className={"metric"}>m/s</span></p>
                            <p className={"description"}>Direction: {getWindDirection(currentData.wind.deg)}</p>
                        </div>
                    </div>


                    <div className={"pressure slide-box"}>
                        <div className={"weather-info-box"}>
                            <img  alt='thunder' src={'./assets/pressure.png'} className={"wind-icon"}/>
                            <p className={"title"}>Pressure</p>
                            <p className={"value"}>{currentData.main.pressure}<span className={"metric"}>hPa</span></p>
                            <p className={"description"}>Humidity: {currentData.main.humidity}%</p>
                        </div>
                    </div>
                </Slider>

            </div>
            <div>
                <h3 className={"date-stamp"}>March 30</h3>
            </div>
            <ul className={"hourly-temp"}>
                {sortedData.map((item:any)=> <HourWeatherItem item={item}/>)}
            </ul>
        </div>
    ) : null
}

const HourWeatherItem = ({item}: any) =>{
    return (
        <li>
            <p><strong>{new Date(item.dt_txt).toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' })}</strong></p>
            <p>{item.weather[0].main}</p>
            <img  alt='thunder' src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} className={"temp-icon"}/>
            <p><strong>{item.main.temp}</strong> &#8451;</p>
        </li>
    )
}
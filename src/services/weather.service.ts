
export default class WeatherService {

    getWeather = async (lat: string|number, lon: string|number) => {
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

        return filteredDataDayByDay
    }

}
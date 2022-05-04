import WeatherCard from "../../components/Weather-card/Weather-card";
import './style.sass'

export default function Home(props: any) {
    return (
        <div className="home-body">
            <h3>Today</h3>
            <WeatherCard/>

            <h3>Next 5 days</h3>
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>

        </div>
    )
}
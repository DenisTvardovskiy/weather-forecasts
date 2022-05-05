

   export const getWeather = async (lat: string|number, lon: string|number) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_ACCESS_KEY}`);
        return await res.json();
    }

    export  const getCityCord = async (term: any) => {
        const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${term}&limit=5&appid=${process.env.REACT_APP_ACCESS_KEY}`);
        return await res.json();
}


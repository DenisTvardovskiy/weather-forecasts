import './style.sass'
import {useEffect, useState} from "react";
import {getCityCord} from "../../services/weather.service";


export default function SearchBar(props: any) {
    const [isOpenSearch, setIsOpenSearch] = useState(false)
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [searchValue, setSearchValue] = useState([{name:'lol', state: 'lol', country: 'lal'},{name:'lol', state: 'lol', country: 'lal'}])
    const [selectedCity, setSelectedCity] = useState<any>({})

    useEffect(() => {
        const timer = setTimeout(() => setTerm(debouncedTerm), 1000);
        return () => clearTimeout(timer);
    }, [debouncedTerm])

    useEffect(() => {
        if (term !== '') {
            onSearchSubmit(term);
        } else {
            clearResults();
        }
    }, [term]);


    useEffect(()=>{
        setSelectedCity(JSON.parse(localStorage.getItem("location") as string))
    }, [])


    const toggleSearch = () => setIsOpenSearch(!isOpenSearch)

    const onSearchSubmit = async (term: any) => {
        getCityCord(term).then((res)=>{
            setSearchValue(res);
            }
        )

    }

    const clearResults = () => setSearchValue([]);

    return (
        <div className="search-box">
            {!isOpenSearch ? <h2>{selectedCity?.city}, {selectedCity?.country}</h2> : null}
            {!isOpenSearch ?
                <div onClick={toggleSearch} className="open-search">
                    <img className={"search-icon"} src="./assets/search.png" alt={"search"}/>
                </div> : null}
            {isOpenSearch ?
                <div className="search-bar">
                    <input type="text" className="search"
                           onChange={e => setDebouncedTerm(e.target.value)}
                           placeholder={'Change country'}
                           value={debouncedTerm}
                    />

                    {searchValue.length ?
                        <ul className='city-select'>
                            {searchValue.map((item: any) => {
                                return (<CitySelectField setFoundData={props.setFoundData} setSearchValue={setSearchValue} setSelectedCity={setSelectedCity} item={item}/>)
                            })}
                        </ul>
                        : null}
                    <img onClick={toggleSearch} className="close" src="./assets/close.png" alt="close"/>
                </div>
                : null}
        </div>
    )
}

function CitySelectField (props:any){
    const item = props.item

    const cityData = {
        lat: item.lat,
        lon: item.lon,
        city: item.name,
        country: item.country
    }

    const selectCity = (data:any) => {
        localStorage.setItem("location", JSON.stringify(data))
        props.setSelectedCity(data)
        props.setFoundData(data)
        props.setSearchValue([])
    }

    return (
        <li key={item.lat} onClick={()=>selectCity(cityData)}><strong>{item.name}</strong>, {item.state ? item.state : 'N/A'}, {item.country}</li>
    )
}
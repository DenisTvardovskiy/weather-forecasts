import './style.sass'
import {useState} from "react";


export default function SearchBar(props:any) {
    const [isOpenSearch, setIsOpenSearch] = useState(false)

    const toggleSearch = () => setIsOpenSearch(!isOpenSearch)

    return(
        <div className="search-box">
            {!isOpenSearch ? <h2>Riga, Latvia</h2>: null}
            {!isOpenSearch ?
            <div onClick={toggleSearch} className="open-search">
                <img className={"search-icon"} src="./assets/search.png" alt={"search"}/>
            </div>: null }
            {isOpenSearch ?
                <div className="search-bar">
                    <input type="text" className="search" placeholder={'Change country'}/>
                    <img onClick={toggleSearch} className="close" src="./assets/close.png" alt="close"/>
                </div>
                : null}
        </div>
    )
}
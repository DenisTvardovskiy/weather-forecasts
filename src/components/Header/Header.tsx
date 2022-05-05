import './style.sass'
import SearchBar from "../Search-bar/Search-bar";
import {ILocation} from "../Permission-pop-up/Permission-pop-up";


export default function Header({setFoundData}: any) {
    return (
        <header>
            <SearchBar setFoundData={setFoundData}/>
        </header>
    )
}
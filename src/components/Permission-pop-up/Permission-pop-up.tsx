import React from "react";
import './style.sass';

export interface ILocation {
    city?: string;
    country?: string;
    lat?: string|number;
    lon?: string| number;
}

export default function PermissionPopUp(props:any) {

    const defaultData = {
        lat: '56.946',
        lon: '24.105',
        city: 'Riga',
        country: 'Latvia'
    }

    const askPermission = () => {
        navigator.geolocation.getCurrentPosition(
            (e)=> {
                console.log(e)
                props.setShowPermission(false)
                setLocalStorage(true, {lat: e?.coords?.latitude, lon: e?.coords?.longitude})
            },
            (e)=>{
                props.setShowPermission(false)
                setLocalStorage(false, defaultData)
            })
    }

    const setLocalStorage = (permission: boolean, location: ILocation) => {
        localStorage.setItem("permission", JSON.stringify(permission))
        localStorage.setItem("location", JSON.stringify(location))
    }

    const rejectedPermission = () => {
        props.setShowPermission(false)
        setLocalStorage(false, defaultData)
    }



    return (
        <div className="background">
            <div className="pop-up-body">
                <div className="img-box">
                    <img alt='sunny' src={'http://openweathermap.org/img/wn/02d@2x.png'}/>
                </div>
                <div className="text-box">
                    <p className="title">Location permission needed</p>
                    <p className="text">Please enable location permission to get
                        more accurate weather information</p>
                </div>
                <div className="button-box">
                    <span className="allow" onClick={()=>{askPermission()}}>Allow location</span>
                    <span className="reject" onClick={()=>{rejectedPermission()}}>Don't allow location</span>
                </div>
            </div>
        </div>
    );
}

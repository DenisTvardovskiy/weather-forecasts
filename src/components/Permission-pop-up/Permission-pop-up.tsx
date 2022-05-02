import React from "react";
import './style.sass';

export default function PermissionPopUp(props:any) {

    const askPermission = () => {
        navigator.geolocation.getCurrentPosition(
            (e)=> {
                console.log(e)
                props.setShowPermission(false)
            },
            (e)=>{
                console.log(e)
                props.setShowPermission(false)
            })
    }

    const rejectedPermission = () => {
        props.setShowPermission(false)
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

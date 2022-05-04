import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import MoreInfo from "./pages/More-info/More-info";
import Header from "./components/Header/Header";
import PermissionPopUp from './components/Permission-pop-up/Permission-pop-up';

function App() {
  const [showPermission, setShowPermission] = useState(true)
    const permission = localStorage.getItem("permission")

    if(showPermission && permission) {
        setShowPermission(false)
    }

    useEffect(()=>{
        const data =
            // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=37.751&lon=-97.822&units=metric&appid=${process.env.REACT_APP_ACCESS_KEY}`)
            fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${process.env.REACT_APP_ACCESS_KEY}`)
        data.then((res)=> console.log(res))
    })

  return (
    <div className="App">
        <Header/>
        {!showPermission?
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/w" element={<MoreInfo />} />
        </Routes>:null}
      {showPermission?<PermissionPopUp showPermission={showPermission} setShowPermission={setShowPermission}/>:null}
    </div>
  );
}

export default App;

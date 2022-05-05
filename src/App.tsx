import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import MoreInfo from "./pages/More-info/More-info";
import PermissionPopUp from './components/Permission-pop-up/Permission-pop-up';

function App() {
  const [showPermission, setShowPermission] = useState(true)
    const permission = localStorage.getItem("permission")

    if(showPermission && permission) {
        setShowPermission(false)
    }

  return (
    <div className="App">
        <div className={"left-side"}>
            <img alt={'lake'} src={"/assets/desk-bg.jpg"}/>
        </div>
        {!showPermission?
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/more-info" element={<MoreInfo />} />
        </Routes>:null}
      {showPermission?<PermissionPopUp showPermission={showPermission} setShowPermission={setShowPermission}/>:null}
    </div>
  );
}

export default App;

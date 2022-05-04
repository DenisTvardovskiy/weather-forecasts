import React, {useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './App.scss';
import PermissionPopUp from "./components/Permission-pop-up/Permission-pop-up";
import Home from './pages/Home/Home';
import MoreInfo from "./pages/More-info/More-info";

function App() {
  const [showPermission, setShowPermission] = useState(true)

  return (
    <div className="App">
        <div>
            header
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/w" element={<MoreInfo />} />
            {/*<Route path="about" element={<About />} />*/}
        </Routes>
      {/*{showPermission?<PermissionPopUp showPermission={showPermission} setShowPermission={setShowPermission}/>:null}*/}
    </div>
  );
}

export default App;

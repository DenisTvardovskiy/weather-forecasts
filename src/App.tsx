import React, {useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import MoreInfo from "./pages/More-info/More-info";
import Header from "./components/Header/Header";

function App() {
  const [showPermission, setShowPermission] = useState(true)

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/w" element={<MoreInfo />} />
        </Routes>
      {/*{showPermission?<PermissionPopUp showPermission={showPermission} setShowPermission={setShowPermission}/>:null}*/}
    </div>
  );
}

export default App;

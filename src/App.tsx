import React, {useState} from 'react';
import './App.scss';
import PermissionPopUp from "./components/Permission-pop-up/Permission-pop-up";

function App() {
  const [showPermission, setShowPermission] = useState(true)

  return (
    <div className="App">
      hello
      {showPermission?<PermissionPopUp showPermission={showPermission} setShowPermission={setShowPermission}/>:null}
    </div>
  );
}

export default App;

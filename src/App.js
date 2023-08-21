import logo from './logo.svg';
import './App.css';

import Box from "./user/Box";
import Toggle from "./user/Toggle";
import Form from "./user/Form";
import Profile from "./user/Profile";
import Login from "./user/Login";
import Func from "./user/Func";

function pro(){
  alert("hello from app");
}

function App() {
  
  return (
    <div className="App">
     {/* <Box />
     <br></br>
     <Toggle />
     <br></br>
     <Form />
     <br></br>
     <Profile />
     <br></br> */}
     <Login />
     <br></br>
     <Func data={pro}/>
    </div>
  );
}

export default App;

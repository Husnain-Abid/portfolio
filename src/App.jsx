import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import "./App.css";

function App() {

  return ( 
    <>
    <Routes>
    <Route path="/" Component={Home}/>

    </Routes>
    </>
  );
}

export default App;

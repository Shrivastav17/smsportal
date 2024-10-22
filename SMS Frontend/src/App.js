import React from "react";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";


function App(){
    return(
        <>
       <Header></Header>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default App;
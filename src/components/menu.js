
import React from "react"; // obligatorisk i varje react-fil, kan få error 
import {
    Route,
    BrowserRouter,
    Switch,
    Link
} from "react-router-dom"; 

import Form from "./form";
import {ClassComp} from "./class";

// Menu måste ha stor bokstav, kommer inte funka annars
function Menu() { 

    // funktionen måste returnera JSX 
    return (

        <>

        <BrowserRouter>

            {/* Flytta till form */}
            <Link to="/"> With form | </Link>
            <Link to="/home">Without form</Link>
            <br/><br/>
        
                <Route path="/" exact component={Form} />
                <Route path="/home" component={ClassComp} />
            

        </BrowserRouter>

            <nav className="nav">

                <li>Home</li>
                <li>About</li>
                <li>Log in</li>
                <li>Cart</li> 

            </nav>

        </>
    )
}



// måste exportera funktionen så den kan användas/importera i tex App.js

export default Menu;






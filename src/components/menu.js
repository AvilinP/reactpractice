
import React from "react"; // obligatorisk i varje react-fil, kan få error 

// Menu måste ha stor bokstav, kommer inte funka annars
function Menu() { 

    // funktionen måste returnera JSX 
    return (

        <nav>

            <li>Home</li>
            <li>About</li>
            <li>Log in</li>
            <li>Cart</li> 

        </nav>
    )
}



// måste exportera funktionen så den kan användas/importera i tex App.js

export default Menu;






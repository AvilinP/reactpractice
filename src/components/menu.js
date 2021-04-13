
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

function MyInfo() {

    return(

        <div> 

            <h1>Avilin</h1>

            <p> I love the Internet and cute dogs!</p>

            <ul>Hej</ul>
            <ul>Hej igen</ul>
            <ul>Hej då!</ul>



        </div>

    )


}

// måste exportera funktionen så den kan användas/importera i tex App.js

export {Menu, MyInfo};






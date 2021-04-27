import React, {useEffect, useState} from "react";
import axios from "axios";


function API() {

    const [data , setData] = useState([]);

    // Triggas efter render, här anropas API
    useEffect(()=>{

        const fetchData = async()=> {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            console.log(response.data)
            const res = response.data
            // kan behövas konvertera till json.string
            setData(res) 
        }

        fetchData()

    }, [])

    // Skapa inte en funktion likt nedan utanför useEffect. 
    // async function fetchData() {
    //     const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

    //     console.log(response)
    // }

    
    // Render, anropa inte API här
    return (
        <div className="APIscroll">
            <p> Data kommer skrivas ut här </p> 
            {data.map((singleData)=>{ return <h1> {singleData.title} </h1> })}
        </div>
    )
}

export default API;


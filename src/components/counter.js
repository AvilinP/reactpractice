import React, {useState} from "react";



function Counter(props) {

    const [counter, setCounter] = useState(0)

    // ()=> { } arrow function

        return (

            <>

                <div> <button onClick={ ()=> { setCounter(counter+1) } }>+</button> </div>

                <button onClick={ ()=>{ setCounter(counter -1)} } > - </button>

                <div>{counter} </div>

                <div> {props.price} </div>

            </>

        )

}

export default Counter;

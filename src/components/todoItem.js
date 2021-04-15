import React from "react";


function TodoItem(props) {

    return (

        <>
            <input type="checkbox" 
            checked={props.todo.completed}
            /> 
            <span> 
                {props.todo.text} 
            </span>
            
            <br></br> 
        </>
    )

}


export default TodoItem;
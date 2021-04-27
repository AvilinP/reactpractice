import React, {useState} from "react";


function Form() {

    //onSubmit == handleSubmit

    const [name, setName] = useState("användare har inte matat in något namn");
    const [email, setEmail] = useState("användare har ingen email");

    // kan ändra till arrow function 
    function handleSubmit(e) {
        e.preventDefault();

        console.log("name:", name, "email :", email);
    }

    // onChange == handleOnChange

    function handleOnChange(e) {

       // setName(e.target.value)
       setName({[e.target.name]: e.target.value})
      //  setEmail(e.target.value)
        console.log({[e.target.name]: e.target.value})
    }


    return(

        <form onSubmit={handleSubmit}>
            
            <p>Sign up!</p>
            <input placeholder="enter your name" 
            name="name"
            value={name} 
            onChange={handleOnChange} />

            <input placeholder="enter your email" 
            name="email"
            value={email} 
            onChange={handleOnChange} />

            <button>Send</button>

        </form>  
    )

}

export default Form;
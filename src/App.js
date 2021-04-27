// import logo from './logo.svg';
import React from "react";
import './App.css';

// importera funktionen Menu från sin path
import Menu from "./components/menu";

import Footer from "./components/footer";
import Clock from "./components/clock";
import ContactCard from "./components/contactCard";

import todosData from "./components/todosData";
import TodoItem from "./components/todoItem";

import Counter from "./components/counter";

import Form from "./components/form";

import API from "./components/API";





function App() {

  const greeting = "React";
  const hello = "hi";

  const todoItems = todosData.map(item => <TodoItem key={item.id} todo={item} />)

  return (

      <div className="App">

        <h1>Hello {`${hello} ${hello}`} {greeting}!</h1>

        <Menu />

        {todoItems}

        <div className="counter"> 
          <Counter />
        </div>

        {/* <Form /> */}

        <Clock />
      
        <ContactCard 
          
          contact={{
            name: "Ada Lovelace" , 
            imgUrl: "https://wearetechwomen.com/wp-content/uploads/2020/02/Ada-Lovelace.jpg", 
            phone: "00 11 22 33", 
            email: "ada@lovelace.com"
          }}

        />

        <API />  
        
        <Footer />

      </div>

  );
}




export default App;

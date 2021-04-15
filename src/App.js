// import logo from './logo.svg';
import './App.css';

// importera funktionen Menu från sin path
import Menu from "./components/menu";
import Main from "./components/main";
import Footer from "./components/footer";
import Clock from "./components/clock";
import ContactCard from "./components/contactCard";

import Product from "./components/product";
import productsData from "./components/productsData";



function App() {

  const greeting = "React";
  const hello = "hi";

  const productComponents = productsData.map(item => <Product key={item.id} product={item} />) 

  return (
    <div className="App">

      <h1>Hello {`${hello} ${hello}`} {greeting}!</h1>

      <Menu />

      <Main />

      <Clock />

      <ContactCard 
         
        contact={{
          name: "Ada Lovelace" , 
          imgUrl: "https://wearetechwomen.com/wp-content/uploads/2020/02/Ada-Lovelace.jpg", 
          phone: "00 11 22 33", 
          email: "ada@lovelace.com"
        }}

      />

      {productComponents}

      <Footer />

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

// importera funktionen Menu från sin path
import Menu from "./components/menu";
import MyInfo from "./components/main";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">

      <h1>Hej hej REACT!</h1>

      <Menu />

      <MyInfo />

      <Footer />

    </div>
  );
}

export default App;

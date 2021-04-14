import logo from './logo.svg';
import './App.css';

// importera funktionen Menu från sin path
import Menu from "./components/menu";
import Main from "./components/main";
import Footer from "./components/footer";
import Clock from "./components/clock";

function App() {

  const greeting = "React";
  const hello = "hej";

  return (
    <div className="App">

      <h1>Hej {`${hello} ${hello}`} {greeting}!</h1>

      <Menu />

      <Main />

      <Clock />

      <Footer />

    </div>
  );
}

export default App;

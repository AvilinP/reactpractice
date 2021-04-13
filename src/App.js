import logo from './logo.svg';
import './App.css';

// importera funktionen Menu från sin path
import { Menu , MyInfo } from "./components/menu"

function App() {
  return (
    <div className="App">

      <h1>Hej hej REACT!</h1>

      <Menu />

      <MyInfo />

    </div>
  );
}

export default App;

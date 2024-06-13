import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Menu from './components/menu';
import FlavorsMenu from './components/flavorsMenu';
import Flavors from './components/flavors';
import NumberFlavors from './components/numberFlavors';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <NumberFlavors/>
      <FlavorsMenu/>
    </div>
  );
}

export default App;

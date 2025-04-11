import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.tsx';
import {Homepage} from './components/homepage/homepage.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;

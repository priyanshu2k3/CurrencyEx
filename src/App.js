import './App.css';
import {React,useState} from 'react';
import Form from './components/Form';
import Navbar from './components/Navbar';
import { statevar } from './context/statevar';

function App() {
  
  const [currency, setcurrency] = useState("INR");
  return (
    <div className="container">
    <Navbar/>
    <statevar.Provider value ={{currency, setcurrency}}>
    <Form/>
    </statevar.Provider>
    </div>
  );
}

export default App;

import './App.css';
import Home from './components/Home';
import Calculator from './components/Calculator';

import { BrowserRouter, Link, Route } from 'react-router-dom';

import CalcProvider from './context/CalcProvider';

function App() {
  return (
    <main>
      <CalcProvider>
      <BrowserRouter>
        <Route path="/" component={Home}/>
        <Route path="/calc" component={Calculator}/>
        
        <div><Link to="/calc">Calculo Total</Link></div>
      </BrowserRouter>
      </CalcProvider>
    </main>
  );
}

export default App;

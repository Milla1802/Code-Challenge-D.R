import Home from './pages/Home';
import Calculator from './components/Calculator';
import './css/style.css';

import { BrowserRouter, Route } from 'react-router-dom';

import CalcProvider from './context/CalcProvider';

function App() {
  return (
    <main>
      <CalcProvider>
      <BrowserRouter>
        <Route path="/" component={Home}/>
        <Route path="/calc" component={Calculator}/>
      </BrowserRouter>
      </CalcProvider>
    </main>
  );
}

export default App;

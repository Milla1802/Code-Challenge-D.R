import './App.css';
/* import Calculator from './components/Calculator'; */
import Wall1 from './components/Wall1';
import Wall2 from './components/Wall2';
import Wall3 from './components/Wall3';
import Wall4 from './components/Wall4';


import CalcProvider from './context/CalcProvider';

function App() {
  return (
    <main>
      <CalcProvider>
        <Wall1 />
        <Wall2 />
        <Wall3 />
        <Wall4 />
      </CalcProvider>
    </main>
  );
}

export default App;

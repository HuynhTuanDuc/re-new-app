
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Self from './self/Self';
import Slot1 from './excercise/Slot1';
import Slot2 from './excercise/Slot2';
import Slot3 from './excercise/Slot3';
import Excercise5 from './excercise/Excercise5';
import Excercise6 from './excercise/Excercise6';
import Excercise7 from './excercise/Excercise7';
import Excercise8 from './excercise/Excercise8';
import Excercise10 from './excercise/Excercise10';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => { navigate('/Slot1') }}>
        Slot 1
      </button>
      <button
        onClick={() => { navigate('/Slot2') }}>
        Slot2
      </button>
      <button
        onClick={() => { navigate('/Slot3') }}>
        Slot3
      </button>
      <button
        onClick={() => { navigate('/Excercise5') }}>
        Excercise 5
      </button>
      <button
        onClick={() => { navigate('/Excercise6') }}>
        Excercise 6
      </button>
      <button
        onClick={() => { navigate('/Excercise7') }}>
        Excercise 7
      </button>
      <button
        onClick={() => { navigate('/Excercise8') }}>
        Excercise 8
      </button>
      <button
        onClick={() => { navigate('/Excercise10') }}>
        Excercise 10
      </button>
      <br />

      <Routes>
        <Route path="/slot1" element={<Slot1 />} />
        <Route path="/self" element={<Self />} />
        <Route path="/slot2" element={<Slot2 />} />
        <Route path="/slot3" element={<Slot3 />} />
        <Route path="/excercise5" element={<Excercise5 />} />
        <Route path="/excercise6" element={<Excercise6 />} />
        <Route path="/excercise7" element={<Excercise7 />} />
        <Route path="/excercise8" element={<Excercise8 />} />
        <Route path="/excercise10" element={<Excercise10 />} />
      </Routes>
    </div>
  );

}

export default App;

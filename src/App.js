
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Self from './self/Self';
import Slot1 from './excercise/Slot1';
import Slot2 from './excercise/Slot2';
import Slot3 from './excercise/Slot3';
import {useNavigate} from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <button
      onClick={() => {navigate('/Slot1')}}>
        Slot 1
      </button>
      <button
      onClick ={() => {navigate('/Slot2')}}>
        Slot2
      </button>
      <button
      onClick ={() => {navigate('/Slot3')}}>
        Slot3
      </button>
      <button
      onClick={() => {navigate('/Self')}}>
        Self
      </button>
      <br/>

      <Routes>
        <Route path="/slot1" element={<Slot1 />} />
        <Route path="/self" element={<Self />} />
        <Route path="/slot2" element={<Slot2/>}/>
        <Route path="/slot3" element={<Slot3/>}/>
      </Routes>
    </div>
  );
  
}

export default App;

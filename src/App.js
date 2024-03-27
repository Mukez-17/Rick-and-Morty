import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Characters from './Pages/Characters';
import Episodes from './Pages/Episodes';
import Locations from './Pages/Locations';
import CardDetails from './Components/CardDetails';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/Rick-and-Morty/' element={<Characters />} />
        <Route path='/Rick-and-Morty/:id' element={<CardDetails />} />
        <Route path='/Rick-and-Morty/episodes' element={<Episodes />}/>
        <Route path='/Rick-and-Morty/episodes/:id' element={<CardDetails />} />
        <Route path='/Rick-and-Morty/locations' element={<Locations />}/>
        <Route path='/Rick-and-Morty/locations/:id' element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

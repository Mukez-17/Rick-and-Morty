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
        <Route path='/' element={<Characters />} />
        <Route path='/:id' element={<CardDetails />} />
        <Route path='/episodes' element={<Episodes />}/>
        <Route path='/episodes/:id' element={<CardDetails />} />
        <Route path='/locations' element={<Locations />}/>
        <Route path='/locations/:id' element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

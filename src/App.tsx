
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainSearch from './components/MainSearch';
import Album from './components/Album';

// import AlbumMusic from './components/Album';


const App= ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:id" element={<Album />} />
        
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;

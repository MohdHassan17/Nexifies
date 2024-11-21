import './App.css';


// React Router Import
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Header & Footer Import
import Header from './components/Header';

//Landing Page Import
import Landing from './pages/Landing'



function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
        </Routes>

      
      </BrowserRouter>
    </div>
  );
}

export default App;

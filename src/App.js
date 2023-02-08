
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import { Home, Profile } from "./Pages";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
    
      <div>
      <BrowserRouter>
          <Routes>
            
          <Route path='/' element={<Home/>} exact />
          <Route path='/profile' element={<Profile/>} exact />
          
        </Routes>
      </BrowserRouter>
      </div>
    
    </>
  );
}

export default App;

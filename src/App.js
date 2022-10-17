
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route path='/' element={<Home/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
  
    <Home/>
   </>
  );
}

export default App;

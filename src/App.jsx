import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './views/Home.jsx';

function App() {

  return (
      <div>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
   )
}

export default App

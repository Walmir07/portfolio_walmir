import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './views/Home.jsx';
import About from './views/About.jsx';
import Projects from './views/Projects.jsx';
import Contact from './views/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {

  return (
      <div>
        <Header/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
   )
}

export default App

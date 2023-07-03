import './App.css';
import Logo from '../src/components/header/Header';
import Navbar from './components/navbar/Navbar';
import Home from './components/core/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/aboutus/AboutUs';
import OurServices from './pages/OurServices';
import Gallery from './pages/Gallery';
import 'animate.css/animate.css';
import Integrated from './pages/integrated';
import 'slick-carousel/slick/slick.css';
import Footer from './components/footer/footer';
import SliderComponent from './pages/slider';
import Download from './pages/Appdownload';
import Contact from './pages/Contact';
import ContactForm from './pages/contactform';

function App() {
   
  return (
    <>
   
    <Router>
    <Logo/>
    <Navbar/>
      <Routes >
<Route path='/' element={<Home/>}/>
      <Route path="/AboutUs" element={<AboutUs/>} /> {/* Define the route for AboutUs */}
      <Route path="/ourservices" element={<OurServices/>} /> {/* Define the route for AboutUs */}
      <Route path="Gallery" element={<Gallery/>} /> {/* Define the route for AboutUs */}
      <Route path="/contact" element={<Contact/> } >
        </Route> 

      </Routes>
      {/* Add other routes for your application */}
      <Footer/>
    </Router>
    {/* <br/>
    <Integrated />
      <SliderComponent />
      <Download /> */}
      
     

    </>
  );
}

export default App;

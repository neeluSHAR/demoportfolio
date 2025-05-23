import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Toggle from "./Components/Toggle/Toggle";
// import { themeContext } from "./Context";
// import { useContext } from "react";

function App() {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  return (
    <div className="App">
      
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      <Toggle/>
    </div>
  );
}

export default App;

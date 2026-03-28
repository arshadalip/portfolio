// import logo from './logo.svg';
import './App.css';
import './index.css';


import WhyChooseUs from "./components/WhyChooseUs";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import LogoSlider from './components/LogoSlider';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ThemeToggle from './components/darkmode/ThemeToggle';




function App() {
  return (
    <div className="App mx-auto dark:bg-dark-gradient container-custom">
      {/* <header className="App-header">
      </header> */}
     <ThemeToggle />
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <LogoSlider />
      <Portfolio />
      <WhyChooseUs />
      <Experience />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
// import all of the components
import About from "./components/About";
import Alpha from "./components/Alpha";
import Contact from "./components/Contact";
import Index from "./components/Index";
import Launch from "./components/Launch";
import Sattelite from "./components/Sattelite";
import SolarSystem from "./components/SolarSystem";
import Suits from "./components/Suits";
import Tours from "./components/Tours";
import Training from "./components/Training";
import Vehicles from "./components/Vehicles";
 
const App = () => {
 return (
   <div>
     <Routes>
       <Route exact path="/" element={<Index />} />
       <Route exact path="/alpha" element={<Alpha />} />
       <Route exact path="/contact" element={<Contact />} />
       <Route exact path="/launch" element={<Launch />} />
       <Route exact path="/sattelite" element={<Sattelite />} />
       <Route exact path="/solarsystem" element={<SolarSystem />} />
       <Route exact path="/suits" element={<Suits />} />
       <Route exact path="/tours" element={<Tours />} />
       <Route exact path="/training" element={<Training />} />
       <Route exact path="/Vehicles" element={<Vehicles />} />
       <Route exact path="/about" element={<About />} />

     </Routes>
   </div>
 );
};
 
export default App;

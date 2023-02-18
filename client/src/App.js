import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Tour from "./components/recordList";
import Suits from "./component/suits";
 
const App = () => {
 return (
   <div>
     <Routes>
       <Route exact path="/" element={<Tour />} />
       <Route exact path="/suits" element={<Suits />} />

     </Routes>
   </div>
 );
};
 
export default App;

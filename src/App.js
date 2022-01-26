import React from "react";
import Home from "./pages/Home";
import FindDonor from "./pages/FindDonor";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import About from "./pages/About";
import WhyDonate from "./pages/WhyDonate";


function App() {
  
  
  return (
    
    <div className="App">  


    <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/find-donor' element={<FindDonor/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/why-donate' element={<WhyDonate/>} />
    </Routes>

    </Router>
    
    </div>
  );
}

export default App;

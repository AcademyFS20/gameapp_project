import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {About,Error,FAQ,Home,Person} from './pages';
import {Footer,Navbar,Sidebar} from './components';



function App() {
  return (
   
     <Router>
       <Navbar/>
       <Sidebar/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/person" element={<Person/>}/>
         <Route path="/faq" element={<FAQ/>}/>
         <Route path="*" element={<Error/>}/>
       </Routes>
       <Footer/>
     </Router>

  );
}


export default App;

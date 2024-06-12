import Contact from './Component/Contact/Contact';

import Foot from './Component/Footer/Foot';

import Home1 from './Component/Home/Home1';

import About from './Component/About/About';

import Body from './Component/Body/Body';

import Face from './Component/Face1/Face';

import Nail from './Component/Nail/Nail';

import Service from './Component/Service/Service';

import {Route,Routes} from "react-router-dom";

import Navbar from './Component/Navbar/Navbar';




function App() {

  return (

    <>

    

    <div>

      <Navbar></Navbar>
  

      <Routes>

      <Route exact path ="/" element={<Home1></Home1>}></Route>

      <Route exact path ="/Home1" element={<Home1></Home1>}></Route>

      <Route exact path ="/About" element={<About></About>}></Route>

      <Route exact path ="/Service" element={<Service></Service>}></Route>

      <Route exact path ="/Contact" element={<Contact></Contact>}></Route>

      <Route exact path ="/Face" element={<Face></Face>}></Route>

      <Route exact path ="/Body" element={<Body></Body>}></Route>

      <Route exact path ="/Nail" element={<Nail></Nail>}></Route>

      </Routes>

      <Foot></Foot>

    </div>






    </>

  );

}




export default App;





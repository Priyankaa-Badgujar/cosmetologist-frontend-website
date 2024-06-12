import './Foot.css'
import React from 'react'

const Foot = () => {
  return (
    <div>

<footer>
    <div className="container-home-10">

        <div className="foot1">
            <h2>Kristine H.</h2><br/><br/>
            <h4>info@kristine.com</h4>
            <h4>123-456-7890</h4><br/><br/>
        </div>
        <div className="foot2">
            <h4>123 your street name,</h4>
            <h4>City name, Country, post code </h4>
        </div>
        <div className="foot3">
            <h2>Subscibe and get 10% off</h2>
            <label for="">Email</label><br/><br/>
            <input type="text" placeholder ="enter your email address"/> <br/>
            <button id='btnfoot'>Submit</button>
        </div>
    </div>
    </footer>


    </div>


  )
}

export default Foot
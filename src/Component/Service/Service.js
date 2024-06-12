import React from 'react'
import './Service.css'
import Foot from '../Footer/Foot';
import { NavLink } from 'react-router-dom';
import Contact from '../Contact/Contact';
const Service = () => {
  return (
    <div>


<div className="container-service">


<div className="container-service-1">
    <h4>• SERVICES •</h4><br/><br/>
    <h1>Let me take </h1>
    <h1 id="each">care of you</h1>
</div>


<div className="container-home-2">
        <h1>Individual care</h1><br/>
        <h4 className='para-care'>I believe that no body (or face) is the same – meaning that during our consultation, I will determine the best ways to treat the individual needs of your skin. This way, we can ensure that you get the care and attention you need to look your best.</h4><br/><br/>
        <div className="img-grp1">
        <div className="face">
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=392,h=304,fit=crop/kristinelite52xvg/img-Aq22N8JWZRCOr6p5.png" alt=""/><br/>  
            <button><NavLink to='/Face' className ="navbut">Face care</NavLink></button>
        </div>
        <div className="body">
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=392,h=304,fit=crop/kristinelite52xvg/img-mjEE5OG7LMs72MVb.png" alt=""/> <br/>
            <button><NavLink to='/Body' className ="navbut">Body care</NavLink></button>      
        </div>
        <div className="nail">
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=392,h=304,fit=crop/kristinelite52xvg/img-Ylee5XQWq2fZgepw.png" alt=""/><br/>
            <button><NavLink to='/Nail' className ="navbut">Nail care</NavLink></button>
        </div>
    </div>
    </div>



    
    <div className="container-home-3">
        <div className="eco">
            <div className="eco-img">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=184,h=112,fit=crop/kristinelite52xvg/cosmetics-mp88nPOzZgsbL9lr.png" alt=""/>
            </div>
            <div className="eco-para">
                <h4>ECO-FRIENDLY PRODUCTS</h4><br/>
                <h5>Our products are 100% ecological and specially formulated to provide expert skin care while also caring for the planet. </h5>
            </div>
        </div>

        <div className="exp">
            <div className="exp-img">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=184,h=112,fit=crop/kristinelite52xvg/img-mp88nPPkqxU0gQeD.png" alt=""/>
            </div>
            <div className="exp-para">
                <h4>10 YEARS OF EXPERIENCE</h4><br/>
                <h5>With over a decade of hands-on experience in the field, all treatments are carried out in a safe and professional setting.</h5>
            </div>
        </div>
   
    </div>



    <div className="container-home-6">
        <h1>Testimonials</h1>
        <div className="test">
            <div className="test1">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=240,fit=crop/kristinelite52xvg/img-mePPGB0KR8HwGQ94.png" alt=""/><br/>
                <h4>JESS MARIKO</h4>
                <h5>Kristine is the best – I've been regularly seeing her for 2 years now and I've been able to seriously improve my cystic acne. She's professional and knows what she's doing. </h5>
            </div>
            <div className="test2">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=590,fit=crop/kristinelite52xvg/img-ALppbGBba4FnJ4V7.png" alt=""/><br/>
                <h4>SARAH MORGAN</h4>
                <h5>I initially got referred to Kristine by my doctor, since I suffer from a psoriasis that's been difficult to manage with medication alone. Thanks to Kristine's know-how, we've been able to keep the flair-ups down for a year now.</h5>
            </div>
            <div className="test3">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=590,fit=crop/kristinelite52xvg/img-ALppbv0nV3FQ8y39.png" alt=""/><br/>
                <h4>ALICE STAUBER</h4>
                <h5>I recently moved to the area and was looking for a beauty salon that would offer both body treatments and nail services. Kristine does both, and she does them well. Thanks girl!</h5>
            </div>
        </div>
    </div><br/><br/><br></br>


    <Contact heading ="Book An Appointment"></Contact><br/>




</div>


    </div>
  )
}

export default Service
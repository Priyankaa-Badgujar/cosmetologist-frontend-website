import './Home1.css'
import Contact from '../Contact/Contact'
import Foot from '../Footer/Foot'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Home1 = () => {
  return (
    <div>

<div className="container-home-1">

    
        <div className="head1">
            <h1 className="name1">Kristine</h1>
            <h4 className="para1">A COSMETOLOGIST’S QUEST TO SKIN PERFECTION</h4>
        </div>
        <div className="icon">

        </div>
    </div>

    <div className="container-home-2">
        <h1>Let me take care of you</h1>
        <div className="img-grp1">
        <div className="face">
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=392,h=304,fit=crop/kristinelite52xvg/img-Aq22N8JWZRCOr6p5.png" alt=""/><br/>  
            <button><NavLink to='/Face' className = "navbut">Face care</NavLink></button>
        </div>
        <div className="body">
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=392,h=304,fit=crop/kristinelite52xvg/img-mjEE5OG7LMs72MVb.png" alt=""/> <br/>
            <button><NavLink to='/Body' className = "navbut">Body care</NavLink></button>      
        </div>
        <div className="nail">
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=392,h=304,fit=crop/kristinelite52xvg/img-Ylee5XQWq2fZgepw.png" alt=""/><br/>
            <button><NavLink to='/Nail' className = "navbut">Nail care</NavLink></button>
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

    <div className="container-home-4">
        <div className="self-img">
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=404,fit=crop/kristinelite52xvg/img-Y4LLpbZ9XvFOWVBR.png" alt=""/>
        </div>
        <div className="about-me">
            <h1>About me</h1>
            <h4>KRISTINE HENDERSON</h4>
            <p className="me-para-1">I've always had a thing for aesthetics. From a young age, I've been fascinated with skincare, and after developing dermatitis herpetiformis and having to give up gluten, I decided to share my findings with the rest of the world. </p>
            <p className="me-para-2">In 10 years, a lot has changed in cosmetology. As an avid and life-long learner, I take pride in keeping up with the newest trends in order to be able to provide you with the expert care you deserve. </p>
            <button><NavLink to='/About' className = "navbut">Learn More</NavLink></button>
        </div>
        <div className="work-img">
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=358,fit=crop/kristinelite52xvg/img-AQEEVzRW38IGaqWk.png" alt=""/>
        </div>
    </div>


    <div className="container-home-5">
        <h4>• SUMMER OFFER •</h4>
        <br/><br/>
        <h1>Subscribe and get 10% off!</h1><br/>
        <label for="">Email</label><br/>
        <input type="text" placeholder="your email address"/><br/>
        <button>Submit</button>
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
    </div>

  
   <div className="container-home-8">
        <div className="botel">
            <div className="botel-1">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1084,fit=crop/kristinelite52xvg/img-AVLLN9xB3Bc7vnGv.png" alt=""/><br/><br/>
                <h4>TONIC</h4>
                <h2>$ 36</h2>
            </div>
            <div className="botel-2">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1084,fit=crop/kristinelite52xvg/img-ALppbv2L7BcnoDoj.png" alt=""/><br/><br/>
                <h4>LIP GLOSS</h4>
                <h2>$ 12</h2>
            </div>
            <div className="botel-3">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1084,fit=crop/kristinelite52xvg/img-A855pNjqqkfwOz73.png" alt=""/><br/><br/>
                <h4>ORGANIC OIL</h4>
                <h2>$ 7</h2>
            </div>
        </div>
    </div>


    <Contact heading ="Book An Appointment"></Contact><br/>

    </div>
  )
}

export default Home1
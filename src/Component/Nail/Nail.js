import './Nail.css'
import React from 'react'
import { NavLink } from 'react-router-dom';
import Foot from '../Footer/Foot';

const Nail = () => {
  return (
    <div>


<div className="container-face">
        <div className="container-face-1" id='npic'>
            <h4>• SERVICES •</h4><br/><br/>
            <h1>I’ll take care of </h1>
            <h1>your nails</h1>
        </div>

        <div className="container-face-2">
            <div className="self-img">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=368,fit=crop/kristinelite52xvg/img-mePPGXroayT32Ln3.png" alt=""/>
            </div>
            <div className="about-me">
                <h1>Nail care</h1>
                <p className="me-para-1">Looking after your hands is like looking after your soul. Sometimes, brightly colored nails can have a real effect on your overall mood and outlook on life. Our salon offers traditional manicures and pedicures, as well as long-lasting gel coats and acrylic nail art. For nail maintenance, please book separately. </p>
                <button><NavLink to='/Contact' className ="navbut">Book Now</NavLink></button>
            </div>
            <div className="work-img">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=368,fit=crop/kristinelite52xvg/img-Yg225XrMLzHOGVy2.png" alt=""/>
            </div>
        </div>

        <div className="container-face-3">
         
            <div className="acne">
                <div className="acne-1">
                    <h3>FRENCH MANICURE</h3>
                    <h5>An all-time classNameic. This express manicure takes care of your hands, cuticles and nails. Basic polish included.  </h5>
                </div>
                <div className="acne-num">
                    <h2>$ 15</h2>
                </div>
            </div>

            <div className="acne2">
                <div className="acne-2">
                    <h3>EXPRESS PEDICURE</h3>
                    <h5> This treatment includes a salt soak, foot massage, and nail treatment. Basic polish included. </h5>
                </div>
                <div className="acne-num2">
                    <h2>$ 15</h2>
                </div>
            </div>

            <div className="acne">
                <div className="acne-1">
                    <h3>BASIC NAIL POLISH</h3>
                    <h5>Including up to 2 different basic colors, cuticle trimming, and coat. Hand cream treatment included.  </h5>
                </div>
                <div className="acne-num">
                    <h2>$ 20</h2>
                </div>
            </div>

            <div className="acne2">
                <div className="acne-2">
                    <h3>SHELLAC GEL NAIL</h3>
                    <h5>Long-lasting nail polish treatment – lasts up to 4 weeks! Choose from 30 different colors. Hand cream treatment included. </h5>
                </div>
                <div className="acne-num2">
                    <h2>$ 25</h2>
                </div>
            </div>

         
        </div>

    </div>


    </div>
  )
}

export default Nail
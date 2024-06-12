import './Face.css'
import Foot from '../Footer/Foot'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Face = () => {
  return (
    <div>


<div className="container-face">
        <div className="container-face-1" id='fpic'>
            <h4>• SERVICES •</h4><br/><br/>
            <h1>I’ll take care of </h1>
            <h1>your face</h1>
        </div>

        <div className="container-face-2">
            <div className="self-img">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=368,fit=crop/kristinelite52xvg/img-m7VVkZLPz3I3p4gJ.png" alt=""/>
            </div>
            <div className="about-me">
                <h1>Face care</h1>
                <p className="me-para-1">Some say that your face is the gate to your soul – and for many of us, a clear, vibrant skin is the sign of good health and overall fortunes in life. The face treatments available at our salon focus on natural ingredients that are environmentally-conscious, sustainably sourced and paraben and silicone free. Please make sure to inform us of any allergies prior your appointment.</p>
                <button><NavLink to='/Contact' className ="navbut">Book Now</NavLink></button>
            </div>
            <div className="work-img">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=368,fit=crop/kristinelite52xvg/img-Y4LLp2KwLwTBK6g3.png" alt=""/>
            </div>
        </div>

        <div className="container-face-3">
         
            <div className="acne">
                <div className="acne-1">
                    <h3>ACNE RELIEF</h3>
                    <h5>Using acne-specific products, this treatment includes cleansing, exfoliation, a clay mask, toner, serum and moisturiser. </h5>
                </div>
                <div className="acne-num">
                    <h2>$ 23</h2>
                </div>
            </div>

            <div className="acne2">
                <div className="acne-2">
                    <h3>BIRTHDAY PAMPER</h3>
                    <h5>Everyone deserves a little something on their special day. Includes cleansing, mask, and moisturiser. </h5>
                </div>
                <div className="acne-num2">
                    <h2>$ 31</h2>
                </div>
            </div>

            <div className="acne">
                <div className="acne-1">
                    <h3>ANTI-AGING TREATMENT</h3>
                    <h5>Using our special anti-aging line, this treatment will leave you looking younger and visibly refreshed. Includes mask and serum. </h5>
                </div>
                <div className="acne-num">
                    <h2>$ 36</h2>
                </div>
            </div>

            <div className="acne2">
                <div className="acne-2">
                    <h3>YOUNG AND BRIGHT</h3>
                    <h5>Aimed at young skin, this treatment includes a holistic experience for all senses. </h5>
                </div>
                <div className="acne-num2">
                    <h2>$ 28</h2>
                </div>
            </div>

            <div className="acne">
                <div className="acne-1">
                    <h3>MICRODERMABRASION</h3>
                    <h5>Using state-of-art technology, our microdermabrasion brightens your skin after just one visit. 5 sessions recommended.  </h5>
                </div>
                <div className="acne-num">
                    <h2>$ 20</h2>
                </div>
            </div>

            <div className="acne2">
                <div className="acne-2">
                    <h3>ACID PEEL</h3>
                    <h5>Perfect for getting rid of lines, dark spots, acne scars, and dead skin cells, our acid peel treatment is great value for money. </h5>
                </div>
                <div className="acne-num2">
                    <h2>$ 15</h2>
                </div>
            </div>

        </div>

    </div>


    </div>
  )
}

export default Face
import React from 'react'
import './Body.css'
import Foot from '../Footer/Foot'
import { NavLink } from 'react-router-dom'

const Body = () => {
  return (
    <div>


<div className="container-body">
        <div className="container-face-1" id='bpic'>
            <h4>• SERVICES •</h4><br/><br/>
            <h1>I’ll take care of </h1>
            <h1>your body</h1>
        </div>

        <div className="container-face-2">
            <div className="self-img">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=368,fit=crop/kristinelite52xvg/img-m5KKrDlRWbTWekRE.png" alt=""/>
            </div>
            <div className="about-me">
                <h1>Body care</h1><br/>
                <p className="me-para-1">People are so busy taking care of their minds and keeping fit, they often overlook the holistic care that their bodies are craving for. We offer massages, full body mud treatments, and tailored treatment plans for skin conditions such as psoriasis and dermatitis herpetiformis. Please specify any medication you're on during your booking.</p>
                <button><NavLink to='/Contact' className ="navbut">Book Now</NavLink></button>
            </div>
            <div className="work-img">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=368,fit=crop/kristinelite52xvg/img-YNqqNoORQns7exNd.png" alt=""/>
            </div>
        </div>

        <div className="container-face-3">
         
            <div className="acne">
                <div className="acne-1">
                    <h3>SWEDISH MASSAGE</h3>
                    <h5>Relax and enjoy this deep-tissue massage followed by a 10-minute meditative relaxation session. </h5>
                </div>
                <div className="acne-num">
                    <h2>$ 40</h2>
                </div>
            </div>

            <div className="acne2">
                <div className="acne-2">
                    <h3>HOT-STONE MASSAGE</h3>
                    <h5> A massage that uses heated up stones to release tension and relax the body. Not recommended for skin conditions. </h5>
                </div>
                <div className="acne-num2">
                    <h2>$ 55</h2>
                </div>
            </div>

            <div className="acne">
                <div className="acne-1">
                    <h3>CLAY BODY WRAP</h3>
                    <h5>Detoxify, cleanse and tone with our special mud blend that helps with water retention and detoxing the pores.  </h5>
                </div>
                <div className="acne-num">
                    <h2>$ 62</h2>
                </div>
            </div>

            <div className="acne2">
                <div className="acne-2">
                    <h3>CELLULITE BODY WRAP</h3>
                    <h5>This treatment boosts circulation and flushes the body of toxins. Best used for targeted treatment. </h5>
                </div>
                <div className="acne-num2">
                    <h2>$ 40</h2>
                </div>
            </div>

            <div className="acne">
                <div className="acne-1">
                    <h3>SALT FLOAT</h3>
                    <h5>Forget about gravity and enjoy the sensation of floating in our custom-built float pods.  </h5>
                </div>
                <div className="acne-num">
                    <h2>$ 45</h2>
                </div>
            </div>

            <div className="acne2">
                <div className="acne-2">
                    <h3>THAI MASSAGE</h3>
                    <h5>Using traditional methods, this no-oil massage focuses on rebalancing your natural energy.  </h5>
                </div>
                <div className="acne-num2">
                    <h2>$ 50</h2>
                </div>
            </div>

        </div>

    </div>

    </div>
  )
}

export default Body
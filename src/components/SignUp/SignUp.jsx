import React from 'react'
import "./SignUp.css"
import img1 from "../../assets/7.PNG"
import img2 from "../../assets/8.PNG"
import img3 from "../../assets/9.PNG"
import img4 from "../../assets/10.PNG"
import img5 from "../../assets/11.PNG"
export default function SignUp() {
    return (
        <div className="signup-container">
            <h1>How Zoomcar works</h1>
            <p>Drive yourself to an adventure and back in 5 simple steps</p>
            <div className="flex-container">
                <div className="flex-item">
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <h2>Book</h2>
                    <p>Search for and book a car on our site!</p>
                </div>
                <div className="flex-item">
                    <div>

                        <img src={img2} alt="" />
                    </div>
                    <h2>Upload License</h2>
                    <p>Upload your driver’s license, and pay a small security deposit.</p>
                </div>
                <div className="flex-item">
                    <div>

                        <img src={img3} alt="" />
                    </div>
                    <h2>Unlock</h2>
                    <p>We SMS your car details 20 minutes before pickup.Unlock it via the Zoomcar app.</p>
                </div>
                <div className="flex-item">
                    <div>

                        <img src={img4} alt="" />
                    </div>
                    <h2>Zoom</h2>
                    <p>Fill the start checklist in the Zoomcar app. Grab the keys from the glove-box and drive.</p>
                </div>
                <div className="flex-item">
                    <div>

                        <img src={img5} alt="" />
                    </div>
                    <h2>Return</h2>
                    <p>Return the car to the same location and fill the end checklist to end your trip.</p>
                </div>
            </div>
            <button>Sign up</button>
        </div>
    )
}

import React from 'react'
import "./ZoomCar.css"
import zc1 from "../../assets/1.PNG"
import zc2 from "../../assets/2.PNG"
import zc3 from "../../assets/3.PNG"
import zc4 from "../../assets/4.PNG"
import zc5 from "../../assets/5.PNG"
import zc6 from "../../assets/6.PNG"

export default function ZoomCar() {
    return (
        <div className="zoomcar">
            <h1>the zoomcar advantage</h1>
            <p>We simplified car rentals, so you can focus on what's important to you.</p>
            <div className="zoomcar-grid-container">
                <div className="zoomcar-grid-item">
                    <img src={zc1} alt="" />
                    <h3>Fuel Cost Included</h3>
                    <p>Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!</p>
                </div>
                <div className="zoomcar-grid-item">
                    <img src={zc2} alt="" />
                    <h3>No Hidden Charges</h3>
                    <p>Our prices include taxes and insurance.
                        What you see is what you really pay!</p>
                </div>
                <div className="zoomcar-grid-item">
                    <img src={zc3} alt="" />
                    <h3>Flexi Pricing Packages</h3>
                    <p>One size never fits all! Choose a balance of time and kilometers that works best for you.</p>
                </div>
                <div className="zoomcar-grid-item">
                    <img src={zc6} alt="" />
                    <h3>Go Anywhere</h3>
                    <p>Our cars have all-India permits. Just remember to pay state tolls and entry taxes.</p>
                </div>
                <div className="zoomcar-grid-item">
                    <img src={zc5} alt="" />
                    <h3>24x7 Roadside Assistance</h3>
                    <p>We have round-the-clock, pan India partners. Help is never far away from you.</p>
                </div>
                <div className="zoomcar-grid-item">
                    <img src={zc4} alt="" />
                    <h3>Damage Insurance</h3>
                    <p>All your bookings include damage insurance! Drive safe, but don’t worry!</p>
                </div>

            </div>
        </div>
    )
}

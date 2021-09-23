import React from 'react'
import "./Hero.css"
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io"


export default function Hero() {
    return (
        <div className="hero-bg">
            <div className="hero-contents">
                <h1>DRIVE IN A SANITISED ZOOMCAR</h1>
                <h6>Self Drive Car Rental in <span style={{ borderBottom: "1px white dotted", fontWeight: "bold" }}> Bangalore <span id="down-arrow"> <IoIosArrowDown /> </span> </span></h6>
                <button>Start your wonderful journey <span className="right-arrow"><IoIosArrowForward id="down-arrow" /></span> </button>
            </div>
        </div>
    )
}

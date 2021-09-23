import React from 'react'
import "./PrimaryLinks.css"

export default function PrimaryLinks() {
    return (
        <div className="primarylinks-wrapper">
            <div className="primarylinks-container">
                <div className="primarylink">
                    <div>
                        <img src="https://www.zoomcar.com/build/img/zc-works.2adcbe18edb84c7c1fdf0c8d6c894f8b.svg" alt="" />

                    </div>
                    <h2>How zoomcar works?</h2>
                </div>
                <div className="primarylink">
                    <div>
                        <img src="https://www.zoomcar.com/build/img/policies.ceddb15a4eef16af85ba8666b1522741.svg" alt="" />

                    </div>
                    <h2> Policies</h2>
                </div>
                <div className="primarylink">
                    <div>
                        <img src="https://www.zoomcar.com/build/img/help-support.acf244c0683e201bd2d978f1ddc5d33d.svg" alt="" />

                    </div>
                    <h2>Help Support</h2>
                </div>
                <div className="primarylink">
                    <div>
                        <img src="https://www.zoomcar.com/build/img/safety.127607759cd86e3d75f5698a641d5b83.svg" alt="" />

                    </div>
                    <h2>Zoom in Safety</h2>
                </div>
            </div>

        </div>
    )
}

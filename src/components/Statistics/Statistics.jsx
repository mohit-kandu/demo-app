import React from 'react'
import "./Statistics.css"

export default function Statistics() {
    return (
        <div className="stats-container">
            <div className="stats-item">
                <div className="stats-img"><img src="https://www.zoomcar.com/build/img/steering-wheel.121c23ffa50aa2da7a1e1f829048dd90.svg" alt="" /></div>
                <h2>3,000+</h2>
                <p>Rides Daily</p>
            </div>
            <div className="stats-item">
                <div className="stats-img"><img src="https://www.zoomcar.com/build/img/happy.c650409b5435456374eca19943b697f0.svg" alt="" /></div>
                <h2>48,00,000+</h2>
                <p>Happy users</p>
            </div>
            <div className="stats-item">
                <div className="stats-img"><img src="https://www.zoomcar.com/build/img/kms.4dc69060e383492afc70514e93ca766c.svg" alt="" /></div>
                <h2>36,00,00,000+</h2>
                <p>Km Travelled</p>
                <p className="psmall">(enough for 470 round trips to the moon!)</p>
            </div>
            <div className="stats-item">
                <div className="stats-img"><img src="https://www.zoomcar.com/build/img/cars.fcc55acb001edaad3d14055517a1e1b4.svg" alt="" /></div>
                <h2>6,500+</h2>
                <p>Number of Zoomcars</p>
            </div>
            <div className="stats-item">
                <div className="stats-img"><img src="https://www.zoomcar.com/build/img/star_rating.5999c91406d9adad8f35df39ef055ec5.svg" alt="" /></div>
                <h2>Rating 4.7/5.0</h2>
                <p>Rated by 3,00,000+ customers</p>
                <p className="psmall">over 10,00,000+ bookings</p>
            </div>

        </div>
    )
}

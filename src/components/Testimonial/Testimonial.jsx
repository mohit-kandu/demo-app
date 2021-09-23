import React from 'react'
import "./Testimonial.css"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


export default function Testimonial() {

    return (
        <div className="testimonial-carousel-container">
            <div className="quote">
                <img src="https://www.zoomcar.com/build/img/quotation.577e70bf4479f87726e9b62c3afe8be0.png" alt="" />
            </div>
            <Carousel
                slide={false}
                interval={null}
                prevLabel=''
                nextLabel=''
                className="testimonial-carousel"

            >
                <Carousel.Item >
                    <div>
                        <h2 className="testimonial-message">I just wanted to let you know that I really appreciate the efforts you are making personally, to ensure that the customer is satisfied... I really hope you carry forward this culture and make a model for other companies.</h2>
                        <h2 className="testimonial-by">- Bejoy Babu</h2>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <h2 className="testimonial-message">You certainly do have a very regular customer here... Must say, Greg went that extra mile... You have a great journey together!</h2>
                        <h2 className="testimonial-by">- Deepak Sharma</h2>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <h2 className="testimonial-message">It was great pleasure use zoom service, As all process being online it was really hassle free experience. good service please keep it going.</h2>
                        <h2 className="testimonial-by">- Mustak R</h2>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <h2 className="testimonial-message">Appreciate the totally new welcome Concept. As an prospective customer, I feel this is going to really set an example in car rentals scenery. Wishing you the very Best and come out in flying colors!!</h2>
                        <h2 className="testimonial-by">- Yekula Santosh</h2>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <h2 className="testimonial-message">The experience with Zoomcar has been excellent. Your process is well thought out and the service definitely fills a void. Maybe you could start a school which teaches "real customer service"!</h2>
                        <h2 className="testimonial-by">- Sunil Rastogi</h2>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div >
    )
}

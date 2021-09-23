import React from 'react'
import "./App.css"
import { Navbar, Hero, ZoomCar, SuperMiller, SignUp, MobileApp, Statistics, Testimonial, Partners, PrimaryLinks, Footer } from "./components"



export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <ZoomCar />
                <SuperMiller />
                <SignUp />
                <MobileApp />
                <Statistics />
                <Testimonial />
                <Partners />
                <PrimaryLinks />
            </main>
            <footer>
                <Footer />
            </footer>
        </>

    )
}

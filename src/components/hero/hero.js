import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import hImg from '../../images/hero.png'
import homeImg from '../../images/jariThread/homeImg.png'

const Hero = () => {
    return (
        <section className="hero-section text-center mt-110 rmt-70" style={{ backgroundImage: `url(${homeImg})` }}>
            <div className="container">
                <div className="hero-content">
                    <h1 className="text-bold text-white">Quality threads and jari</h1>
                    <h1 className="text-lighter">delivered to your doorstep</h1>
                    <AnchorLink href='#about' className="scroll-down scroll">
                        <div className="scroll-box"></div>
                    </AnchorLink>
                </div>
            </div>
        </section>
    )
}

export default Hero;
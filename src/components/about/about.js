import React from 'react'
import Bg from '../../images/wp/wp-bg.png'
import abimg1 from '../../images/jariThread/abImg1.jpg'
import abimg2 from '../../images/jariThread/abImg2.jpg'
import abimg3 from '../../images/wp/wp-3.png'

const About = (props) => {

    return (
        <section id="about" className="wp-section pt-150 rmb-100" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="wp-images rmb-150">
                            <div className="experience-year">
                                <span className="number">25</span>
                                <h4>Years of Experience</h4>
                            </div>
                            <img src={abimg1} alt="Wordpress" />
                            <img src={abimg2} alt="Wordpress" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="wp-content ml-50 rml-0 rpt-30">
                            <div className="section-title mb-10">
                                <h6>Your Vision, Our Passion</h6>
                                <h2>A World of  <br />
                                    <span>Threads and Jari</span> <br />
                                    <span className="thin">Explore Our Collection</span>
                                </h2>
                                <h6>Unleash Your Creativity</h6>
                            </div>
                            <img src={abimg3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
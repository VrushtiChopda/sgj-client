import React from 'react'

const About2 = (props) => {

    return (
        <section className="about-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="about-image mr-50 rmr-0">
                            <div className="experience-year">
                                <span className="number">25</span>
                                <h4>Years of Experience</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="wp-content about-content mb-10 ml-50 pt-100 rmb-50">
                            <div className="section-title mb-10">
                                <h6>Your Vision, Our Passion</h6>
                                <h2>A World of <br />
                                    <span>Threads and Jari</span> <br />
                                    <span className="thin">Explore Our Collection</span>
                                </h2>
                                <h6>Unleash Your Creativity</h6>
                            </div>
                            {/* <img src={abimg} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;
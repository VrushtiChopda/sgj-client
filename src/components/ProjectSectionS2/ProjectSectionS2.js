import React from 'react'
import Projects from '../../api/Projects'
import { Link } from 'react-router-dom'


const ProjectSectionS2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="apartment-section s2 text-center">
            <div className="container">
                <div className="section-title mb-75">
                    <h2>Choose a <span className="thin">Product</span></h2>
                    <p className='h4'>Pick Your Perfect Product</p>
                </div>
                <div className="apartment-carousel">
                    <div className="row">
                        {Projects.slice(0, 10).map((project, i) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={i}>
                                <div className="apartment-item">
                                    <div className="apartment-content">
                                        {/* <img src={project.ssIcon} alt="Icon" /> */}
                                        <div className="apartment-img">
                                            <img src={project.pImg} alt="Apartment" />
                                        </div>
                                        <h3><Link onClick={ClickHandler} to={`/project-single/${project.slug}`}>{project.pTitle}</Link></h3>
                                        {/* <span>from {project.width} m2</span> */}
                                        <p>{project.des} </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSectionS2;
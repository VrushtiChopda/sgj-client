import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import About2 from '../../components/about2/about2';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import about from '../../images/jariThread/about.jpg'
import about1 from '../../images/jariThread/about1.jpg'

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} desktopImage={about} mobileImage={about1} />
            <ServiceSection ptClass={'pt-100'} />
            <About2 />
            {/* <FunFact fClass={'style-two pt-165 pb-125 mb-0'}/> */}
            {/* <TeamSection /> */}
            {/* <VideoSection /> */}
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;

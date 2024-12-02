import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
import Footer from '../../components/footer/Footer';
import product from '../../images/jariThread/product.png'
import product1 from '../../images/jariThread/product1.png'

const ProjectPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'products'} pagesub={'Products'} desktopImage={product} mobileImage={product1} />
            <ProjectSectionS2 />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectPage;
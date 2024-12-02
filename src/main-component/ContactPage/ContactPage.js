import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import contact from '../../images/jariThread/contact.png'
import contact1 from '../../images/jariThread/contact1.png'
const ContactPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'header-style-2'} />
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} desktopImage={contact} mobileImage={contact1} />
            <Contactpage />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default ContactPage;
import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import contact from '../../images/jariThread/contact.png'

const ContactPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'header-style-2'} />
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} pageImage={contact} />
            <Contactpage />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ContactPage;


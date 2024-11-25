import React from 'react';
import ContactForm from '../ContactFrom'
import sIcon1 from '../../images/contact/icon1.png'
import sIcon2 from '../../images/contact/icon2.png'
import sIcon3 from '../../images/contact/icon3.png'


const Contactpage = () => {

    return (
        <div>
            <div className='mt-4 d-flex justify-content-center' >
                <div className='text-white m-4' style={{ backgroundColor: '#CA9C6A' }}>
                    <div>
                        <iframe width={450} height={350} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=%20500&amp;height=600&amp;hl=en&amp;q=new%20GIDC,%20surat+(chocolate%20shop)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
                    </div>
                    <div className='text-center p-4'>
                        <h3><i className="fa fa-map-marker"></i> Branch 1</h3>
                        <h4>219 Bedford Street Birmingham, AL 35211</h4>
                    </div>
                </div>
                <div className='text-white m-4' style={{ backgroundColor: '#CA9C6A' }}>
                    <div>
                        <iframe width={450} height={350} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=%20500&amp;height=600&amp;hl=en&amp;q=new%20GIDC,%20surat+(chocolate%20shop)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
                    </div>
                    <div className='text-center p-4'>
                        <h3 ><i className="fa fa-map-marker"></i> Branch 2</h3>
                        <h4>219 Bedford Street Birmingham, AL 35211</h4>
                    </div>
                </div>  
            </div>
            {/* <div className='container my-4 text-white' style={{ backgroundColor: '#CA9C6A' }}>
                <div className='row'>
                    <div className='col-6 p-0'>
                        <iframe width={600} height={304} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=%20500&amp;height=600&amp;hl=en&amp;q=new%20GIDC,%20surat+(chocolate%20shop)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
                    </div>
                    <div className='col-6 p-0'>
                        dvsfdsfsfdfdsf
                    </div>
                </div>
            </div> */}


            {/* <div class="contact-map" id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"></iframe>
            </div>
            <div className="contact-info text-center mb-110">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="info-item">
                            <img src={sIcon1} alt="Icon"/>
                                <p>20 Broklyn Street, New Town New York, United States</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="info-item">
                            <img src={sIcon2} alt="Icon"/>
                                <p>needhelp@charie.com <br/>666 888 0000</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="info-item">
                            <img src={sIcon3} alt="Icon"/>
                                <p>Web Address: <br/>yourwebsite.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <ContactForm />
        </div >
    )

}

export default Contactpage;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Bg from '../../images/team/team-bg.png';
import team1 from '../../images/team/team1.png';
import team2 from '../../images/team/team2.png';
import team3 from '../../images/team/team3.png';

const TeamSection = () => {
    const sliderSettings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="team-section mb-240" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="team-wrap">
                <div className="container">
                    <div className="section-title text-white text-center mb-55">
                        <h2>meet the <span className="thin">team</span></h2>
                        <h6>our team members</h6>
                    </div>
                    <Slider {...sliderSettings}>
                        <div className="team-item">
                            <img src={team1} alt="Team" />
                            <div className="team-des">
                                <h3>Vijay Chopda</h3>
                                <span>Founder</span>
                            </div>
                        </div>
                        <div className="team-item">
                            <img src={team2} alt="Team" />
                            <div className="team-des">
                                <h3>Ashvin Vastarpara</h3>
                                <span>architect assistant</span>
                            </div>
                        </div>
                        <div className="team-item">
                            <img src={team3} alt="Team" />
                            <div className="team-des">
                                <h3>Prakash Narola</h3>
                                <span>architect assistant</span>
                            </div>
                        </div>
                        <div className="team-item">
                            <img src={team3} alt="Team" />
                            <div className="team-des">
                                <h3>Vipul Khunt</h3>
                                <span>architect assistant</span>
                            </div>
                        </div>
                        <div className="team-item">
                            <img src={team3} alt="Team" />
                            <div className="team-des">
                                <h3>Chetan Harkhani</h3>
                                <span>architect assistant</span>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;


// import React from 'react'
// import Bg from '../../images/team/team-bg.png'
// import team1 from '../../images/team/team1.png'
// import team2 from '../../images/team/team2.png'
// import team3 from '../../images/team/team3.png'


// const TeamSection = (props) => {

//     return (
//         <section className="team-section mb-240" style={{ backgroundImage: `url(${Bg})` }}>
//             <div className="team-wrap">
//                 <div className="container">
//                     <div className="section-title text-white text-center mb-55">
//                         <h2>meet the <span className="thin">team</span></h2>
//                         <h6>our team members</h6>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-4 col-md-6">
//                             <div className="team-item">
//                                 <img src={team1} alt="Team" />
//                                 <div className="team-des">
//                                     <h3>Ivet Houze</h3>
//                                     <span>architect assistant </span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                             <div className="team-item">
//                                 <img src={team2} alt="Team" />
//                                 <div className="team-des">
//                                     <h3>Joney vino</h3>
//                                     <span>architect assistant </span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                             <div className="team-item">
//                                 <img src={team3} alt="Team" />
//                                 <div className="team-des">
//                                     <h3>Maria Bill</h3>
//                                     <span>architect assistant </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default TeamSection;

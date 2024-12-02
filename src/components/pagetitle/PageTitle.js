import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PageTitle = (props) => {
    const [backgroundImage, setBackgroundImage] = useState(props.desktopImage);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setBackgroundImage(props.mobileImage);
            } else {
                setBackgroundImage(props.desktopImage);
            }
        };

        handleResize(); // Check on initial render
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [props.desktopImage, props.mobileImage]);

    return (
        <section
            className="banner-section mt-110 rmt-70"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="container">
                <div className="banner-inner">
                    <div className="page-title">
                        <h2>{props.pageTitle}</h2>
                        <span>{props.pagesub}</span>
                    </div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{props.pagesub}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default PageTitle;


// import React from 'react'
// import { Link } from 'react-router-dom'

// const PageTitle = (props) => {
//     return (
//         <section
//             className="banner-section mt-110 rmt-70"
//             style={{
//                 backgroundImage: `url(${props.pageImage})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat'
//             }}>
//             <div className="container">
//                 <div className="banner-inner" >
//                     <div className="page-title">
//                         <h2>{props.pageTitle}</h2>
//                         <span>{props.pagesub}</span>
//                     </div>
//                     <nav aria-label="breadcrumb">
//                         <ol className="breadcrumb">
//                             <li className="breadcrumb-item"><Link to="/">Home</Link></li>
//                             <li className="breadcrumb-item active" aria-current="page">{props.pagesub}</li>
//                         </ol>
//                     </nav>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default PageTitle;
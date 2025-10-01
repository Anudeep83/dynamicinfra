import React, { useEffect, useRef, useState } from 'react';
import img1 from '../../Assets/img1.webp'
import img2 from '../../Assets/img2.webp'
import img3 from '../../Assets/img3.webp'
import aboutusimg from '../../Assets/aboutusimg.webp'
import interior from '../../Assets/interior.webp'
import construction from '../../Assets/construction.webp'
import d1 from '../../Assets/images/d1.png'
import d2 from '../../Assets/images/d2.png'
import d3 from '../../Assets/images/d3.png'
import d4 from '../../Assets/images/d4.png'
import d5 from '../../Assets/images/d5.png'
import d6 from '../../Assets/images/d6.png'
import d7 from '../../Assets/images/d7.png'
import d8 from '../../Assets/images/d8.png'
import d9 from '../../Assets/images/d9.png'
import d10 from '../../Assets/images/d10.png'
import d11 from '../../Assets/images/d11.png'
import './Home.css'
const Home = () => {

    const images = [
    d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [openIndex, setOpenIndex] = useState(null); 
    const [selected, setSelected] = useState({});

    const handleSelect = (index, value) => {
    setSelected((prev) => ({ ...prev, [index]: value }));
    setOpenIndex(null);
    };

  

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

    const contentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const h1 = entry.target.querySelector("h1");
                const p = entry.target.querySelector("p");

                // Reset animation
                h1.style.animation = "none";
                p.style.animation = "none";

                // Force reflow to restart animation
                void h1.offsetWidth;
                void p.offsetWidth;

                // Re-apply animation
                h1.style.animation = "wipeEffect 0.6s ease-out forwards";
                p.style.animation = "wipeEffect 0.6s ease-out forwards";

                // Uncomment if you want only once
                // observer.unobserve(entry.target);
            }
            });
        },
        { threshold: 0.2 } // 20% visible
        );

        if (contentRef.current) {
        observer.observe(contentRef.current);
        }

        return () => {
        if (contentRef.current) observer.unobserve(contentRef.current);
        };
    }, []);

    

    const steps = [
    "Raise a Request",
    "Meet our expert",
    "Book with us",
    "Receive plans",
    "Track & Transact",
    "Settle in"
    ];

    const detailsteps = [
        {
            img: interior,
            title: 'Raise a Request',
            description: 'Raise a service request or call us at XXXXXXXXXX. Our technical expert will get in touch with you.'
        }
    ]

    const packagetable = [
        {
            title: 'elagance',
            packagetitle:[
                {
                    category: 'kitchen',
                    description:[
                        {
                        name:'jwt',
                        usage:'nice'
                        },
                        {
                        name:'tjw',
                        usage:'nice'
                        }
                    ]
                },
                {
                    category: 'design',
                    description:[
                        {
                        name:'jwt',
                        usage:'nice'
                        },
                        {
                        name:'tjw',
                        usage:'nice'
                        }
                    ]
                }
            ]
            

        },
        {
            title: 'elite',
            packagetitle:[
                {
                    category: 'kitchen',
                    description:[
                        {
                        name:'jwt',
                        usage:'nice'
                        },
                        {
                        name:'tjw',
                        usage:'nice'
                        }
                    ]
                }
            ]
        },
        {
            title: 'premium',
            packagetitle:[
                {
                    category: 'kitchen',
                    description:[
                        {
                        name:'jwt',
                        usage:'nice'
                        },
                        {
                        name:'tjw',
                        usage:'nice'
                        }
                    ]
                }
            ]

        },
        {
            title: 'ultra-premium',
            packagetitle:[
                {
                    category: 'kitchen',
                    description:[
                        {
                        name:'jwt',
                        usage:'nice'
                        },
                        {
                        name:'tjw',
                        usage:'nice'
                        }
                    ]
                },
                {
                    category: 'kitchen',
                    description:[
                        {
                        name:'jwt',
                        usage:'nice'
                        },
                        {
                        name:'tjw',
                        usage:'nice'
                        }
                    ]
                }
            ]

        }
    ]



  return (
    <div>
        <div className='home-section'>
            <div className='home1'>
                <div className='homee1-content' ref={contentRef} >
                    <h1 >We build Your Dreams</h1>
                    <p >At Dynamic Infra Projects, 
                       we are dedicated to transforming 
                       ordinary spaces into extraordinary 
                       experiences that resonate with your unique 
                       personality and style. Based in Bangalore, 
                       we are a renowned interior design company 
                       with a reputation for delivering exception 
                       results that blend creativity, functionality, and elegance.</p>
                    <div className='brochure-btn'>
                        <button>Download Brouchre</button>
                    </div>
                </div>
                <div className='home1-content'>
                    <img src={interior} alt='interior'/>
                </div>
            </div>
            <div className='home2'>
                <h1>Why is Dynamic Infra the Best for Interiors and Construction?</h1>
                <div className='img-section'>
                    <img className='trust-logos' src={img1} alt='img1'/>
                    <img className='trust-logos' src={img2} alt='img1'/>
                    <img className='trust-logos' src={img3} alt='img1'/>
                    <hr className="custom-hr" /> 
                    <img className='trust-logos' src={img1} alt='img1'/>
                    <img className='trust-logos' src={img2} alt='img1'/>
                    <img className='trust-logos' src={img3} alt='img1'/>
                </div>
            </div>
            <div className='home3'>
                <div className='home3-content'>
                    <h1>Services</h1>
                    <p>Dynamic interiors has been creating high-end interior designs for years. 
                        What allows the designer to produce functional space planning is our capacity to 
                        listen to and identify the important components of the client's demands and aspirations.</p>
                </div>
                <div className='services-imgs'>
                    <div>
                        <img src = {construction} alt='construction'/>
                        <p>Construction</p>
                    </div>
                    <div>
                        <img src = {interior} alt='interior1'/>
                        <p>Interior</p>
                    </div>
                </div>
            </div>
            <div className='home4'>
            <div className="gallery-section">
            <h1>Gallery</h1>
            <div className="gallery-layout">
                <div className="gallery-item big-left">
                    <img src={images[0]} alt="gallery-1" />
                    </div>
                    <div className="gallery-item middle">
                    <img src={images[1]} alt="gallery-2" />
                    <img src={images[2]} alt="gallery-3" />
                    </div>
                    <div className="gallery-item big-right" onClick={() => setIsOpen(true)}>
                    <img src={images[3]} alt="gallery-4" />
                    <div className="overlay">15+</div>
                </div>
            </div>

            {isOpen && (
                <div className="gallery-modal" onClick={() => setIsOpen(false)}>
                <div
                    className="gallery-modal-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <span className="close-btn" onClick={() => setIsOpen(false)}>
                    &times;
                    </span>

                    <div className="gallery-viewer">
                    <button className="nav-btn left" onClick={handlePrev}>
                        &#10094;
                    </button>

                    <img
                        src={images[currentIndex]}
                        alt={`gallery-${currentIndex}`}
                        className="main-image"
                    />

                    <button className="nav-btn right" onClick={handleNext}>
                        &#10095;
                    </button>
                    </div>
                </div>
                </div>
            )}
            </div>               
            </div>
            <div className='home5'>
                <div className='how-it-works'>
                    <h1>How It Works</h1>
                    <p>Our house construction steps are simple and easy to understand</p>
                    <div className="steps-line">
                        {steps.map((step, index) => (
                            <div className="step-wrapper" key={index}>
                            <div className={`circle ${index === 0 ? "active" : ""}`}>
                                {index + 1}
                            </div>
                            <p>{step}</p>
                            {index < steps.length - 1 && <div className="line"></div>}
                            </div>
                        ))}
                    </div>   
                    <div className="detail-steps">
                        {detailsteps.map((detailsteps, index) => (
                            <div className="detail-wrapper" key={index}>
                                <img src = {detailsteps.img} alt = 'steps' />
                                <div className="detail-points">
                                    <h2>{detailsteps.title}</h2>
                                    <p>{detailsteps.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='home6'>
                <div className="pros-cons">
                    <h1>Why is Dynamic Infra the Best for Interiors and Construction?</h1>
                    <div className="table">
                        <div className='pros'>
                            <div className='head-pro'>
                                <h1>Dynamic infra projects</h1>
                            </div>
                            <div className='pros-table'>
                                <ul>
                                    <li>ESCROW infra Facility for 100% Money Safety</li>
                                    <li>Top Quality Assurance with QASCON</li>
                                    <li>Monitor The Progress From Home using App</li>
                                    <li>ZERO Cost Overruns</li>
                                    <li>Guaranteed On Time Delivery</li>
                                </ul>
                            </div>
                        </div>
                        <div className='cons'>
                            <div className='head-con'>
                                <h1>Other companies</h1>
                            </div>
                            <div className='cons-table'>
                                <ul>
                                    <li>No Safety of Money & High Risk</li>
                                    <li>Improper quality checks</li>
                                    <li>No App. Have to go to construction site</li>
                                    <li>Costs keep increasing</li>
                                    <li>No guarantee on timely delivery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home7'>
            <div className="packages">
                <h1>Packages</h1>
                <div className="package-table">
                    {packagetable.map((packag, index) => (
                    <div key={index} className="package-item">
                        <p>{packag.title}</p>

                        {packag.packagetitle.map((item, i) => (
                        <div key={i} className="custom-dropdown">
                            <button
                            className="dropdown-btn"
                            onClick={() =>
                                setOpenIndex(openIndex === `${index}-${i}` ? null : `${index}-${i}`)
                            }
                            >
                            {item.category}
                            </button>

                            {openIndex === `${index}-${i}` && (
                            <div className="dropdown-content">
                                <table className="desc-table">
                                <tbody>
                                    {item.description.map((desc, idx) => (
                                    <tr key={idx}>
                                        <td>{desc.name}</td>
                                        <td>{desc.usage}</td>
                                    </tr>
                                    ))}
                                </tbody>
                                </table>
                            </div>
                            )}
                        </div>
                        ))}
                        <hr/>
                        <button className='enquire-btn'>Enquire now</button>
                    </div>
                    ))}
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Home
import  { useEffect, useRef, useState } from 'react';
import img1 from '../../Assets/img1.webp'
import img2 from '../../Assets/img2.webp'
import img3 from '../../Assets/img3.webp'
import img4 from '../../Assets/img4.webp'
import img5 from '../../Assets/img5.webp'
import img6 from '../../Assets/img6.webp'
//import aboutusimg from '../../Assets/aboutusimg.webp'
import { motion, AnimatePresence } from "framer-motion";
import interior from '../../Assets/interior.webp'
import interior2 from '../../Assets/interiors2.webp'
import request from '../../Assets/request.webp'
import plan from '../../Assets/plan.webp'
import settle from '../../Assets/settle.webp'
import track from '../../Assets/track.webp'
import design from '../../Assets/design.webp'
import expert from '../../Assets/expert.webp'
import construction from '../../Assets/construction.webp'
import arrow from '../../Assets/arrow.webp'
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
import pdf from '../../Assets/DYNAMIC INTERIORS BROCHURE.pdf'
import './Home.css'
const Home = () => {

    const images = [
    d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [openIndex, setOpenIndex] = useState(null); 
    

    

  

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

        const node = contentRef.current

        if (node) {
        observer.observe(contentRef.current);
        }

        return () => {
        if (node) observer.unobserve(node);
        };
    }, []);

    

    

    const detailsteps = [
        {
            img: request,
            title: 'Raise a Request',
            description: 'Raise a service request or call us at XXXXXXXXXX. Our technical expert will get in touch with you.'
        },
        {
            img: expert,
            title: 'Meet our Expert',
            description: 'Our experts visit you to take all the requirements and submit exhaustive specifications.'
        },
        {
            img: plan,
            title: 'Book with us',
            description: 'Good to go. You pay 10% of the estimated project cost as Booking Amount.'
        },
        {
            img: design,
            title: 'Receive Plans',
            description: 'Our Professional will provide exhaustive drawings and designs till the customer is fully satisfied. Designs include floor plans, 3D elevations, electrical, plumbing and structural designs.'
        },
        {
            img: track,
            title: 'Track & Transact',
            description: 'To ensure absolute trust, Brick&Bolt provides an escrow model where you transfer the amount for stage of the project. You can track the project through our customer application.'
        },
        {
            img: settle,
            title: 'Settle in',
            description: 'We make sure you are well settled in your new home. Our journey together doesn"t end here. We provide 10 years of warranty.'
        },
    ]

    const packagetable = [
        {
            title: 'elagance',
            price:'Rs 1,779/Sq.Ft.',
            packagetitle:[
                {
                    category: 'Design & development',
                    description:[
                        {
                        name:'2D Floor Plan	',
                        usage:'included'
                        },
                        {
                        name:'3D Elevation	',
                        usage:'included'
                        },
                        {
                        name:'Architectural Working Drawings (GFC Drawings)	',
                        usage:'included'
                        },
                        {
                        name:'Structural Drawings as per IS Codes	',
                        usage:'included'
                        },
                        {
                        name:'MEP Drawings	',
                        usage:'included'
                        },
                        {
                        name:'VR & AR Tour	',
                        usage:'not included'
                        },
                    ]
                },
                {
                    category: 'Structure',
                    description:[
                        {
                        name:'Steel',
                        usage:'A1 gold/ Kamadhenu/ equivalent'
                        },
                        {
                        name:'Aggregates',
                        usage:'20mm & 40mm'
                        },
                                                {
                        name:'Blocks',
                        usage:'Solid concrete blocks – 6″ & 4″'
                        },
                        {
                        name:'Cement',
                        usage:'Zuari/ Dalmia/ equivalent (43 or 53 Grade)'
                        },
                                                {
                        name:'RCC Design Mix	',
                        usage:'M25 Grade'
                        },
                        {
                        name:'Ceiling Height	',
                        usage:'10’0″ height (Floor to floor height)'
                        },
                    ]
                },
                {
                    category: 'Kitchen',
                    description:[
                        {
                        name:'Countertop',
                        usage:'Granite (Upto ₹120/sqft)'
                        },
                        {
                        name:'Ceramic wall tiles (2 ft. above Kitchen Slab)	',
                        usage:'Upto ₹40/sqft'
                        },
                        {
                        name:'Accessories & Any other Faucet	',
                        usage:'ISI Marked'
                        },
                        {
                        name:'Kitchen Sink	',
                        usage:'Stainless steel single sink (Upto ₹3000)'
                        },
                        {
                        name:'Main Sink Faucet	',
                        usage:'Upto ₹1500'
                        }
                    ]
                },
                {
                    category: 'Structure',
                    description:[
                        {
                        name:'Bathroom',
                        usage:'Ceramic wall tiles	'
                        },
                        {
                        name:'Sanitary ware & CP fittings (inclusive of Commode, Mixer, Health Faucet, Soap Dish, Towel Rail etc.)	',
                        usage:'Upto ₹16,500 per Bathroom'
                        },
                                                {
                        name:'BlocBathroom Doors',
                        usage:'Waterproof flush doors Upto ₹7000 till 500 sqft of the package BuA'
                        },
                        {
                        name:'Glass partition in Bathroom	',
                        usage:'Not included'
                        },
                    ]
                },
                {
                    category: 'Plumbing',
                    description:[
                        {
                        name:'CPVC Pipes',
                        usage:'Astral/ Prince/ equivalent'
                        },
                        {
                        name:'Solar Water Heater/Geyser Provision		',
                        usage:'included'
                        }
                    ]
                },
                {
                    category: 'Doors & Windows',
                    description:[
                        {
                        name:'Main door	',
                        usage:'Teak door with teak frame of 5″x3″ – ₹20,000 Including Fixtures'
                        },
                        {
                        name:'Internal doors	',
                        usage:'Sal wood frame of 2.5″x4″ & Flush shutters with laminates (30mm) upto ₹8000 including fixtures till 500 sqft of the package BuA'
                        },
                        {
                        name:'Pooja room door	',
                        usage:'Not included'
                        },
                        {
                        name:'Windows',
                        usage:'Aluminium window with glass shutters and Mesh shutters (3 Tracks with 1 mesh) - ₹250/Sqft'
                        },
                        {
                        name:'Window Grill	',
                        usage:'MS Grill with Enamel paint (₹115/sqft)'
                        },
                        {
                        name:'Windows Opening Percentage	',
                        usage:'10% of the Package BUA'
                        },
                    ]
                },
                {
                    category: 'Painting',
                    description:[
                        {
                        name:'Interior Painting	',
                        usage:'JK Putty + Tractor Emulsion'
                        },
                        {
                        name:'Exterior Painting	',
                        usage:'Asian Primer + Ace Exterior Emulsion Paint'
                        }
                    ]
                },
                {
                    category: 'Flooring',
                    description:[
                        {
                        name:'Living and Dining flooring	',
                        usage:'Vitrified Tiles (Upto ₹60/sqft)'
                        },
                        {
                        name:'Rooms and Kitchen Flooring	',
                        usage:'Tiles (Upto ₹60/sqft)'
                        },
                                                {
                        name:'Balcony and Open area flooring	',
                        usage:'Anti-skid tiles (Upto ₹45/sqft)'
                        },
                        {
                        name:'Staircase Flooring	',
                        usage:'Sadarahaali Granite (Upto ₹80/sqft)'
                        },
                                                {
                        name:'Bathroom Tiles	',
                        usage:'Anti-skid tiles (Upto ₹45/sqft)'
                        },
                                                {
                        name:'Parking Tiles	',
                        usage:'Parking tiles (Upto ₹40/sqft)'
                        },
                        {
                        name:'Pooja Room Wall Tiles	',
                        usage:'Not included'
                        }
                    ]
                },
                {
                    category: 'Electrical',
                    description:[
                        {
                        name:'Wires',
                        usage:'Fireproof (Anchor or equivalent)'
                        },
                        {
                        name:'Switches and Sockets	',
                        usage:'GM (basic) or equivalent'
                        }
                        ,
                        {
                        name:'CCTV, UPS & EV charging point wiring provision	',
                        usage:'Not included'
                        }
                    ]
                },
                {
                    category: 'Elevation Cose',
                    description:[
                        {
                        name:'Elevation cost included in the package	',
                        usage:'0.25% of the total project value'
                        }
                    ]
                },
                {
                    category: 'Miscellaneous',
                    description:[
                        {
                        name:'Over-head tank	',
                        usage:'Sintex triple layered (1000 Litre)'
                        },
                        {
                        name:'Underground Sump	',
                        usage:'6000 Litre built with 6″ solid blocks (Customisable)'
                        },
                        {
                        name:'Internal Lofts',
                        usage:'Not included'
                        },
                        {
                        name:'External staircase railings',
                        usage:'MS Railings Upto ₹150/sqft'
                        },
                        {
                        name:'Internal staircase railings',
                        usage:'MS Railings Upto ₹150/sqft'
                        },
                        {
                        name:'Balcony railings	',
                        usage:'MS Railings Upto ₹150/sqft'
                        },
                        {
                        name:'Home Automation - Anexa Enabled	',
                        usage:'Not included'
                        },
                        {
                        name:'Include digi lock, wireless CCTV at 2 places	',
                        usage:'Not included'
                        },
                        {
                        name:'Anti-Termite Treatment	',
                        usage:'included'
                        },
                        {
                        name:'Rain water harvesting pit (Ground water recharge facility)	',
                        usage:'included'
                        }

                    ]
                }
            ]
            

        },
        {
            title: 'elite',
            price:'Rs 1,999/Sq.Ft.',
            packagetitle:[
                {
                    category: 'Design & development',
                    description:[
                        {
                        name:'2D Floor Plan	',
                        usage:'included'
                        },
                        {
                        name:'3D Elevation	',
                        usage:'included'
                        },
                        {
                        name:'Architectural Working Drawings (GFC Drawings)	',
                        usage:'included'
                        },
                        {
                        name:'Structural Drawings as per IS Codes	',
                        usage:'included'
                        },
                        {
                        name:'MEP Drawings	',
                        usage:'included'
                        },
                        {
                        name:'VR & AR Tour	',
                        usage:'not included'
                        },
                    ]
                },
                {
                    category: 'Structure',
                    description:[
                        {
                        name:'Steel',
                        usage:'A1 gold/ Kamadhenu/ equivalent'
                        },
                        {
                        name:'Aggregates',
                        usage:'20mm & 40mm'
                        },
                                                {
                        name:'Blocks',
                        usage:'Solid concrete blocks – 6″ & 4″'
                        },
                        {
                        name:'Cement',
                        usage:'Zuari/ Dalmia/ equivalent (43 or 53 Grade)'
                        },
                                                {
                        name:'RCC Design Mix	',
                        usage:'M25 Grade'
                        },
                        {
                        name:'Ceiling Height	',
                        usage:'10’0″ height (Floor to floor height)'
                        },
                    ]
                },
                {
                    category: 'Kitchen',
                    description:[
                        {
                        name:'Countertop',
                        usage:'Granite (Upto ₹120/sqft)'
                        },
                        {
                        name:'Ceramic wall tiles (2 ft. above Kitchen Slab)	',
                        usage:'Upto ₹40/sqft'
                        },
                        {
                        name:'Accessories & Any other Faucet	',
                        usage:'ISI Marked'
                        },
                        {
                        name:'Kitchen Sink	',
                        usage:'Stainless steel single sink (Upto ₹3000)'
                        },
                        {
                        name:'Main Sink Faucet	',
                        usage:'Upto ₹1500'
                        }
                    ]
                },
                {
                    category: 'Structure',
                    description:[
                        {
                        name:'Bathroom',
                        usage:'Ceramic wall tiles	'
                        },
                        {
                        name:'Sanitary ware & CP fittings (inclusive of Commode, Mixer, Health Faucet, Soap Dish, Towel Rail etc.)	',
                        usage:'Upto ₹16,500 per Bathroom'
                        },
                                                {
                        name:'BlocBathroom Doors',
                        usage:'Waterproof flush doors Upto ₹7000 till 500 sqft of the package BuA'
                        },
                        {
                        name:'Glass partition in Bathroom	',
                        usage:'Not included'
                        },
                    ]
                },
                {
                    category: 'Plumbing',
                    description:[
                        {
                        name:'CPVC Pipes',
                        usage:'Astral/ Prince/ equivalent'
                        },
                        {
                        name:'Solar Water Heater/Geyser Provision		',
                        usage:'included'
                        }
                    ]
                },
                {
                    category: 'Doors & Windows',
                    description:[
                        {
                        name:'Main door	',
                        usage:'Teak door with teak frame of 5″x3″ – ₹20,000 Including Fixtures'
                        },
                        {
                        name:'Internal doors	',
                        usage:'Sal wood frame of 2.5″x4″ & Flush shutters with laminates (30mm) upto ₹8000 including fixtures till 500 sqft of the package BuA'
                        },
                        {
                        name:'Pooja room door	',
                        usage:'Not included'
                        },
                        {
                        name:'Windows',
                        usage:'Aluminium window with glass shutters and Mesh shutters (3 Tracks with 1 mesh) - ₹250/Sqft'
                        },
                        {
                        name:'Window Grill	',
                        usage:'MS Grill with Enamel paint (₹115/sqft)'
                        },
                        {
                        name:'Windows Opening Percentage	',
                        usage:'10% of the Package BUA'
                        },
                    ]
                },
                {
                    category: 'Painting',
                    description:[
                        {
                        name:'Interior Painting	',
                        usage:'JK Putty + Tractor Emulsion'
                        },
                        {
                        name:'Exterior Painting	',
                        usage:'Asian Primer + Ace Exterior Emulsion Paint'
                        }
                    ]
                },
                {
                    category: 'Flooring',
                    description:[
                        {
                        name:'Living and Dining flooring	',
                        usage:'Vitrified Tiles (Upto ₹60/sqft)'
                        },
                        {
                        name:'Rooms and Kitchen Flooring	',
                        usage:'Tiles (Upto ₹60/sqft)'
                        },
                                                {
                        name:'Balcony and Open area flooring	',
                        usage:'Anti-skid tiles (Upto ₹45/sqft)'
                        },
                        {
                        name:'Staircase Flooring	',
                        usage:'Sadarahaali Granite (Upto ₹80/sqft)'
                        },
                                                {
                        name:'Bathroom Tiles	',
                        usage:'Anti-skid tiles (Upto ₹45/sqft)'
                        },
                                                {
                        name:'Parking Tiles	',
                        usage:'Parking tiles (Upto ₹40/sqft)'
                        },
                        {
                        name:'Pooja Room Wall Tiles	',
                        usage:'Not included'
                        }
                    ]
                },
                {
                    category: 'Electrical',
                    description:[
                        {
                        name:'Wires',
                        usage:'Fireproof (Anchor or equivalent)'
                        },
                        {
                        name:'Switches and Sockets	',
                        usage:'GM (basic) or equivalent'
                        }
                        ,
                        {
                        name:'CCTV, UPS & EV charging point wiring provision	',
                        usage:'Not included'
                        }
                    ]
                },
                {
                    category: 'Elevation Cose',
                    description:[
                        {
                        name:'Elevation cost included in the package	',
                        usage:'0.25% of the total project value'
                        }
                    ]
                },
                {
                    category: 'Miscellaneous',
                    description:[
                        {
                        name:'Over-head tank	',
                        usage:'Sintex triple layered (1000 Litre)'
                        },
                        {
                        name:'Underground Sump	',
                        usage:'6000 Litre built with 6″ solid blocks (Customisable)'
                        },
                        {
                        name:'Internal Lofts',
                        usage:'Not included'
                        },
                        {
                        name:'External staircase railings',
                        usage:'MS Railings Upto ₹150/sqft'
                        },
                        {
                        name:'Internal staircase railings',
                        usage:'MS Railings Upto ₹150/sqft'
                        },
                        {
                        name:'Balcony railings	',
                        usage:'MS Railings Upto ₹150/sqft'
                        },
                        {
                        name:'Home Automation - Anexa Enabled	',
                        usage:'Not included'
                        },
                        {
                        name:'Include digi lock, wireless CCTV at 2 places	',
                        usage:'Not included'
                        },
                        {
                        name:'Anti-Termite Treatment	',
                        usage:'included'
                        },
                        {
                        name:'Rain water harvesting pit (Ground water recharge facility)	',
                        usage:'included'
                        }

                    ]
                }
            ]
        },
        {
            title: 'premium',
            price:'Rs. 2249/Sq.Ft.',
            packagetitle:[
                {
                    category: 'Design & development',
                    description:[
                        {
                        name:'2D Floor Plan	',
                        usage:'included'
                        },
                        {
                        name:'3D Elevation	',
                        usage:'included'
                        },
                        {
                        name:'Architectural Working Drawings (GFC Drawings)	',
                        usage:'included'
                        },
                        {
                        name:'Structural Drawings as per IS Codes	',
                        usage:'included'
                        },
                        {
                        name:'MEP Drawings	',
                        usage:'included'
                        },
                        {
                        name:'VR & AR Tour	',
                        usage:'not included'
                        },
                    ]
                },
                {
                    category: 'Structure',
                    description:[
                        {
                        name:'Steel',
                        usage:'A1 gold/ Kamadhenu/ equivalent'
                        },
                        {
                        name:'Aggregates',
                        usage:'20mm & 40mm'
                        },
                                                {
                        name:'Blocks',
                        usage:'Solid concrete blocks – 6″ & 4″'
                        },
                        {
                        name:'Cement',
                        usage:'Zuari/ Dalmia/ equivalent (43 or 53 Grade)'
                        },
                                                {
                        name:'RCC Design Mix	',
                        usage:'M25 Grade'
                        },
                        {
                        name:'Ceiling Height	',
                        usage:'10’0″ height (Floor to floor height)'
                        },
                    ]
                },
                {
                    category: 'Kitchen',
                    description:[
                        {
                        name:'Countertop',
                        usage:'Granite (Upto ₹120/sqft)'
                        },
                        {
                        name:'Ceramic wall tiles (2 ft. above Kitchen Slab)	',
                        usage:'Upto ₹40/sqft'
                        },
                        {
                        name:'Accessories & Any other Faucet	',
                        usage:'ISI Marked'
                        },
                        {
                        name:'Kitchen Sink	',
                        usage:'Stainless steel single sink (Upto ₹3000)'
                        },
                        {
                        name:'Main Sink Faucet	',
                        usage:'Upto ₹1500'
                        }
                    ]
                },
                {
                    category: 'Structure',
                    description:[
                        {
                        name:'Bathroom',
                        usage:'Ceramic wall tiles	'
                        },
                        {
                        name:'Sanitary ware & CP fittings (inclusive of Commode, Mixer, Health Faucet, Soap Dish, Towel Rail etc.)	',
                        usage:'Upto ₹16,500 per Bathroom'
                        },
                                                {
                        name:'BlocBathroom Doors',
                        usage:'Waterproof flush doors Upto ₹7000 till 500 sqft of the package BuA'
                        },
                        {
                        name:'Glass partition in Bathroom	',
                        usage:'Not included'
                        },
                    ]
                },
                {
                    category: 'Plumbing',
                    description:[
                        {
                        name:'CPVC Pipes',
                        usage:'Astral/ Prince/ equivalent'
                        },
                        {
                        name:'Solar Water Heater/Geyser Provision		',
                        usage:'included'
                        }
                    ]
                },
                {
                    category: 'Doors & Windows',
                    description:[
                        {
                        name:'Main door	',
                        usage:'Teak door with teak frame of 5″x3″ – ₹20,000 Including Fixtures'
                        },
                        {
                        name:'Internal doors	',
                        usage:'Sal wood frame of 2.5″x4″ & Flush shutters with laminates (30mm) upto ₹8000 including fixtures till 500 sqft of the package BuA'
                        },
                        {
                        name:'Pooja room door	',
                        usage:'Not included'
                        },
                        {
                        name:'Windows',
                        usage:'Aluminium window with glass shutters and Mesh shutters (3 Tracks with 1 mesh) - ₹250/Sqft'
                        },
                        {
                        name:'Window Grill	',
                        usage:'MS Grill with Enamel paint (₹115/sqft)'
                        },
                        {
                        name:'Windows Opening Percentage	',
                        usage:'10% of the Package BUA'
                        },
                    ]
                },
                {
                    category: 'Painting',
                    description:[
                        {
                        name:'Interior Painting	',
                        usage:'JK Putty + Tractor Emulsion'
                        },
                        {
                        name:'Exterior Painting	',
                        usage:'Asian Primer + Ace Exterior Emulsion Paint'
                        }
                    ]
                },
                {
                    category: 'Flooring',
                    description:[
                        {
                        name:'Living and Dining flooring	',
                        usage:'Vitrified Tiles (Upto ₹60/sqft)'
                        },
                        {
                        name:'Rooms and Kitchen Flooring	',
                        usage:'Tiles (Upto ₹60/sqft)'
                        },
                                                {
                        name:'Balcony and Open area flooring	',
                        usage:'Anti-skid tiles (Upto ₹45/sqft)'
                        },
                        {
                        name:'Staircase Flooring	',
                        usage:'Sadarahaali Granite (Upto ₹80/sqft)'
                        },
                                                {
                        name:'Bathroom Tiles	',
                        usage:'Anti-skid tiles (Upto ₹45/sqft)'
                        },
                                                {
                        name:'Parking Tiles	',
                        usage:'Parking tiles (Upto ₹40/sqft)'
                        },
                        {
                        name:'Pooja Room Wall Tiles	',
                        usage:'Not included'
                        }
                    ]
                },
                {
                    category: 'Electrical',
                    description:[
                        {
                        name:'Wires',
                        usage:'Fireproof (Anchor or equivalent)'
                        },
                        {
                        name:'Switches and Sockets	',
                        usage:'GM (basic) or equivalent'
                        }
                        ,
                        {
                        name:'CCTV, UPS & EV charging point wiring provision	',
                        usage:'Not included'
                        }
                    ]
                },
                {
                    category: 'Elevation Cose',
                    description:[
                        {
                        name:'Elevation cost included in the package	',
                        usage:'0.25% of the total project value'
                        }
                    ]
                },
                {
                    category: 'Miscellaneous',
                    description:[
                        {
                        name:'Over-head tank	',
                        usage:'Sintex triple layered (1000 Litre)'
                        },
                        {
                        name:'Underground Sump	',
                        usage:'6000 Litre built with 6″ solid blocks (Customisable)'
                        },
                        {
                        name:'Internal Lofts',
                        usage:'Not included'
                        },
                        {
                        name:'External staircase railings',
                        usage:'MS Railings Upto ₹150/sqft'
                        },
                        {
                        name:'Internal staircase railings',
                        usage:'MS Railings Upto ₹150/sqft'
                        },
                        {
                        name:'Balcony railings	',
                        usage:'MS Railings Upto ₹150/sqft'
                        },
                        {
                        name:'Home Automation - Anexa Enabled	',
                        usage:'Not included'
                        },
                        {
                        name:'Include digi lock, wireless CCTV at 2 places	',
                        usage:'Not included'
                        },
                        {
                        name:'Anti-Termite Treatment	',
                        usage:'included'
                        },
                        {
                        name:'Rain water harvesting pit (Ground water recharge facility)	',
                        usage:'included'
                        }

                    ]
                }
            ]

        },
        {
            title: 'ultra-premium',
            price:'Rs. 2399/Sq.Ft.',
            packagetitle:[
                {
                    category: 'Design & development',
                    description:[
                        {
                        name:'2D Floor Plan	',
                        usage:'included'
                        },
                        {
                        name:'3D Elevation	',
                        usage:'included'
                        },
                        {
                        name:'Architectural Working Drawings (GFC Drawings)	',
                        usage:'included'
                        },
                        {
                        name:'Structural Drawings as per IS Codes	',
                        usage:'included'
                        },
                        {
                        name:'MEP Drawings	',
                        usage:'included'
                        },
                        {
                        name:'VR & AR Tour	',
                        usage:'not included'
                        },
                    ]
                },
                {
                    category: 'Structure',
                    description:[
                        {
                        name:'Steel',
                        usage:'A1 gold/ Kamadhenu/ equivalent'
                        },
                        {
                        name:'Aggregates',
                        usage:'20mm & 40mm'
                        },
                                                {
                        name:'Blocks',
                        usage:'Solid concrete blocks – 6″ & 4″'
                        },
                        {
                        name:'Cement',
                        usage:'Zuari/ Dalmia/ equivalent (43 or 53 Grade)'
                        },
                                                {
                        name:'RCC Design Mix	',
                        usage:'M25 Grade'
                        },
                        {
                        name:'Ceiling Height	',
                        usage:'10’0″ height (Floor to floor height)'
                        },
                    ]
                },
                {
                    category: 'Kitchen',
                    description:[
                        {
                        name:'Countertop',
                        usage:'Granite (Upto ₹120/sqft)'
                        },
                        {
                        name:'Ceramic wall tiles (2 ft. above Kitchen Slab)	',
                        usage:'Upto ₹40/sqft'
                        },
                        {
                        name:'Accessories & Any other Faucet	',
                        usage:'ISI Marked'
                        },
                        {
                        name:'Kitchen Sink	',
                        usage:'Stainless steel single sink (Upto ₹3000)'
                        },
                        {
                        name:'Main Sink Faucet	',
                        usage:'Upto ₹1500'
                        }
                    ]
                },
                {
                    category: 'Structure',
                    description:[
                        {
                        name:'Bathroom',
                        usage:'Ceramic wall tiles	'
                        },
                        {
                        name:'Sanitary ware & CP fittings (inclusive of Commode, Mixer, Health Faucet, Soap Dish, Towel Rail etc.)	',
                        usage:'Upto ₹16,500 per Bathroom'
                        },
                                                {
                        name:'BlocBathroom Doors',
                        usage:'Waterproof flush doors Upto ₹7000 till 500 sqft of the package BuA'
                        },
                        {
                        name:'Glass partition in Bathroom	',
                        usage:'Not included'
                        },
                    ]
                },
                {
                    category: 'Plumbing',
                    description:[
                        {
                        name:'CPVC Pipes',
                        usage:'Astral/ Prince/ equivalent'
                        },
                        {
                        name:'Solar Water Heater/Geyser Provision		',
                        usage:'included'
                        }
                    ]
                },
                {
                    category: 'Doors & Windows',
                    description:[
                        {
                        name:'Main door	',
                        usage:'Teak door with teak frame of 5″x3″ – ₹20,000 Including Fixtures'
                        },
                        {
                        name:'Internal doors	',
                        usage:'Sal wood frame of 2.5″x4″ & Flush shutters with laminates (30mm) upto ₹8000 including fixtures till 500 sqft of the package BuA'
                        },
                        {
                        name:'Pooja room door	',
                        usage:'Not included'
                        },
                        {
                        name:'Windows',
                        usage:'Aluminium window with glass shutters and Mesh shutters (3 Tracks with 1 mesh) - ₹250/Sqft'
                        },
                        {
                        name:'Window Grill	',
                        usage:'MS Grill with Enamel paint (₹115/sqft)'
                        },
                        {
                        name:'Windows Opening Percentage	',
                        usage:'10% of the Package BUA'
                        },
                    ]
                },
                {
                    category: 'Painting',
                    description:[
                        {
                        name:'Interior Painting	',
                        usage:'JK Putty + Tractor Emulsion'
                        },
                        {
                        name:'Exterior Painting	',
                        usage:'Asian Primer + Ace Exterior Emulsion Paint'
                        }
                    ]
                },
                {
                    category: 'Flooring',
                    description:[
                        {
                        name:'Living and Dining flooring	',
                        usage:'Vitrified Tiles (Upto ₹60/sqft)'
                        },
                        {
                        name:'Rooms and Kitchen Flooring	',
                        usage:'Tiles (Upto ₹60/sqft)'
                        },
                                                {
                        name:'Balcony and Open area flooring	',
                        usage:'Anti-skid tiles (Upto ₹45/sqft)'
                        },
                        {
                        name:'Staircase Flooring	',
                        usage:'Sadarahaali Granite (Upto ₹80/sqft)'
                        },
                                                {
                        name:'Bathroom Tiles	',
                        usage:'Anti-skid tiles (Upto ₹45/sqft)'
                        },
                                                {
                        name:'Parking Tiles	',
                        usage:'Parking tiles (Upto ₹40/sqft)'
                        },
                        {
                        name:'Pooja Room Wall Tiles	',
                        usage:'Not included'
                        }
                    ]
                },
                {
                    category: 'Electrical',
                    description:[
                        {
                        name:'Wires',
                        usage:'Fireproof (Anchor or equivalent)'
                        },
                        {
                        name:'Switches and Sockets	',
                        usage:'GM (basic) or equivalent'
                        }
                        ,
                        {
                        name:'CCTV, UPS & EV charging point wiring provision	',
                        usage:'Not included'
                        }
                    ]
                },
                {
                    category: 'Elevation Cose',
                    description:[
                        {
                        name:'Elevation cost included in the package	',
                        usage:'0.25% of the total project value'
                        }
                    ]
                },
                {
                    category: 'Miscellaneous',
                    description:[
                        {
                        name:'Over-head tank	',
                        usage:'Sintex triple layered (1000 Litre)'
                        },
                        {
                        name:'Underground Sump	',
                        usage:'6000 Litre built with 6″ solid blocks (Customisable)'
                        },
                        {
                        name:'Internal Lofts',
                        usage:'Not included'
                        },
                        {
                        name:'External staircase railings',
                        usage:'MS Railings Upto ₹150/sqft'
                        },
                        {
                        name:'Internal staircase railings',
                        usage:'MS Railings Upto ₹150/sqft'
                        },
                        {
                        name:'Balcony railings	',
                        usage:'MS Railings Upto ₹150/sqft'
                        },
                        {
                        name:'Home Automation - Anexa Enabled	',
                        usage:'Not included'
                        },
                        {
                        name:'Include digi lock, wireless CCTV at 2 places	',
                        usage:'Not included'
                        },
                        {
                        name:'Anti-Termite Treatment	',
                        usage:'included'
                        },
                        {
                        name:'Rain water harvesting pit (Ground water recharge facility)	',
                        usage:'included'
                        }

                    ]
                }
            ]

        }
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    const home3Ref = useRef(null);

    useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            } else {
            entry.target.classList.remove("visible"); 
            }
        });
        },
        { threshold: 0.3 } 
    );

    const home3Refs = home3Ref.current

    if (home3Refs) {
        observer.observe(home3Refs);
    }

    return () => {
        if (home3Refs) observer.unobserve(home3Refs);
    };
    }, []);


  return (
    <div>
        <div className='home-section'>
            <div id = 'aboutUs' className='home1'>
                <div className='homee1-content' ref={contentRef} >
                    <h1 >Building Dreams. Designing Spaces.</h1>
                    <p >At Dynamic Infra Projects,  is a one-stop solution for Construction and Interiors across Karnataka. With over 10 years of expertise, we specialize in creating exceptional residential and commercial spaces that are elegant, functional, and built to last.</p>
                    <div className='services-section' >
                        <div >
                            <h3>Residential Construction & Interiors</h3>
                            <p>From concept to completion, we design and build dream homes with precision and creativity. Whether it’s a new build or a renovation, our team delivers:
                            Complete home construction with quality materials and engineering excellence
                            Custom interiors including modular kitchens, wardrobes, TV units, false ceilings, and stylish living spaces
                            End-to-end project management ensuring on-time and budget-friendly delivery
                            </p>
                        </div>
                        <div>
                            <h3>Commercial Construction & Interiors</h3>
                            <p>We help businesses create spaces that inspire productivity and reflect their brand. Our commercial solutions include:
                               Office, retail, and workspace construction
                               Modern interiors for corporate offices, showrooms, and hospitality spaces
                               Smart designs that balance aesthetics, efficiency, and functionality
                            </p>
                        </div>
                    </div>
                    <div className='brochure-btn'>
                        <a href= {pdf} download>
                            <button type="button">Download Brochure</button>
                        </a>

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
                    <img className='trust-logos' src={img4} alt='img1'/>
                    <img className='trust-logos' src={img5} alt='img1'/>
                    <img className='trust-logos' src={img6} alt='img1'/>
                </div>
                <div>
                    <button className='home2-btn'>Start your construction</button>
                </div>
            </div>
            <div id = 'services' className='home3'>
                <div className='home3-content' ref={home3Ref}>
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
                        <img src = {interior2} alt='interior1'/>
                        <p>Interior</p>
                    </div>
                </div>
            </div>
            <div id = 'gallery' className='home4'>
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
                {detailsteps.map((step, index) => (
                <div
                    className="step-wrapper"
                    key={index}
                    onClick={() => setActiveIndex(index)}
                >
                    <div className={`circle ${activeIndex === index ? "active" : ""}`}>
                    {index + 1}
                    </div>
                    <p>{step.title}</p>
                    {index < detailsteps.length - 1 && <div className="line"></div>}
                </div>
                ))}
                    </div>

                    {/* Animated Detail Steps */}
                    <div className="detail-steps">
                        <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            className="detail-wrapper"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={detailsteps[activeIndex].img} alt="step" />
                            <div className="detail-points">
                            <h2>{detailsteps[activeIndex].title}</h2>
                            <p>{detailsteps[activeIndex].description}</p>
                            </div>
                        </motion.div>
                        </AnimatePresence>
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
                            <p>{packag.price}</p>
                        {packag.packagetitle.map((item, i) => (
                        <div key={i} className="custom-dropdown">
                            <button
                            className="dropdown-btn"
                            onClick={() =>
                                setOpenIndex(openIndex === `${index}-${i}` ? null : `${index}-${i}`)
                            }
                            >
                            {item.category}
                            <img
                                src={arrow}  // <-- your arrow image
                                alt="arrow"
                                className={`arrow-img ${openIndex === `${index}-${i}` ? "up" : "down"}`}
                            />
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
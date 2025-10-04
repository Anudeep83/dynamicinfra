import  {useState ,useEffect, useRef } from 'react';
import logo from '../../Assets/logo.webp';
import hero from '../../Assets/heroimg.webp';
import './Header.css';

const Header = () => {

 const [isNavOpen, setIsNavOpen] = useState(false);
     const toggleNav = () => setIsNavOpen(!isNavOpen);
   

  const headerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1024) return;

      if (headerRef.current) {
        
        const translateX = scrollY * 2; 
        
        const maxTranslate = windowWidth + 200; 
        headerRef.current.style.transform = `translateX(${Math.min(translateX, maxTranslate)}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  const headerdreamRef = useRef(null);
  useEffect(() => {
    const handledreamScroll = () => {
      const scrollY = window.scrollY;
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1024) return;

      if (headerdreamRef.current) {
        
        const translateX = scrollY * -2; 
        
        const maxTranslate = windowWidth + 200; 
        headerdreamRef.current.style.transform = `translateX(${Math.min(translateX, maxTranslate)}px)`;
      }
    };
    window.addEventListener('scroll', handledreamScroll);
    return () => window.removeEventListener('scroll', handledreamScroll);
  }, []);



  const headerimgRef = useRef(null);
  useEffect(() => {
    const handleScrollImg = () => {
      const scrollY = window.scrollY; // use vertical scroll
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1024) return;


      if (headerimgRef.current) {
        const translateY = scrollY * 2; // adjust speed
        const maxTranslate = windowHeight + 200;
        headerimgRef.current.style.transform = `translateY(${Math.min(translateY, maxTranslate)}px)`;

        const opacity = Math.max(1 - scrollY / 500, 0); // fades between 0–500px scroll
        headerimgRef.current.style.opacity = opacity;
      }
    };

    window.addEventListener('scroll', handleScrollImg);
    return () => window.removeEventListener('scroll', handleScrollImg); // cleanup
  }, []);


  // IntersectionObserver animations
  useEffect(() => {
    const elements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div className='hero-section'>
      <img src={hero} className='hero-image animate' ref={headerimgRef} alt='hero-img'/>
      <div className='header-section animate'>
        <nav className='nav-bar'>
          <img src={logo} alt = 'logo'/>
          <a href="#home"><li>Home</li></a>
          <a href="#aboutUs"><li>AboutUs</li></a>
          <a href="#services"><li>Services</li></a>
          <a href="#gallery"><li>Gallery</li></a>
          <a href="#contact"><li>Contact</li></a>
        </nav>
        <nav className='nav-bar-mobile'>
           <div className={`hamburger ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>
             <span></span>
             <span></span>
             <span></span>
           </div>
           <div className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
             <a href="#home">Home</a>
             <a href="#aboutUs">AboutUs</a>
             <a href="#services">Services</a>
             <a href="#gallery">Gallery</a>
             <a href="#contact">Contact</a>
           </div>
        </nav>
        <div className='header-name' ref={headerRef}>
          <h1>Dynamic <span>Infra Projects</span></h1>
        </div>
      </div>
      <p className='dreams' ref={headerdreamRef}>We Build your dreams</p>
    </div>
  );
};

export default Header;

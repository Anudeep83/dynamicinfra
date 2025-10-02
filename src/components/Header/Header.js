import  { useState,useEffect, useRef } from 'react';
import logo from '../../Assets/logo.webp';
import hero from '../../Assets/heroimg.webp';
import './Header.css';

const Header = () => {

 
   

  const headerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowWidth = window.innerWidth;

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

      if (headerimgRef.current) {
        const translateY = scrollY * 2; // adjust speed
        const maxTranslate = windowHeight + 200;
        headerimgRef.current.style.transform = `translateY(${Math.min(translateY, maxTranslate)}px)`;
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
          <li>Home</li>
          <li>Services</li>
          <li>Gallery</li>
          <li>AboutUs</li>
          <li>Contact</li>
        </nav>
        <nav className='nav-bar-mobile'>
          <h1>hgygb</h1>
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

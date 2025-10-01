import React, { useEffect, useRef } from 'react';
import './Form.css'

const Form = () => {

    
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
    
    return(
        <div>
            <div className="form-section" ref={headerRef}>
                <h1>Book FREE Appointment</h1>
                <p>For Best Quality Construction At Affordable Rates</p>
                <div>
                    <form className='form-details'>
                        <div className='form-inputs'>
                            <label htmlFor='name'>Full Name</label>
                            <input type='text' id = 'name' placeholder='Full Name' />
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='number'>Mobile Number</label>
                            <input type='text' id = 'number' placeholder='Mobile Number' />
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='plot'>Location of your plot</label>
                            <input type='text' id = 'plot' placeholder='Location of your plot' />
                        </div>
                        <div className='btn-content'>
                            <button>Start your construction</button>
                            <p><a href='#'>*</a>By submitting this form, 
                               I confirm that I have read and agreed to accept Brick&Bolt's <a href='#'>privacy policy</a></p>
                        </div>
                    </form>
            </div>
            </div>
            
        </div>
    )
}
export default Form
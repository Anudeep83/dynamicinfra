import  { useState,useEffect, useRef } from 'react';
import './Form.css'

const Form = () => {

    
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

      const [formData, setFormData] = useState({
            name: "",
            number: "",
            plot: "",
        });

  // handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({name:'',number:'',plot:''})
    // you can send `formData` to API here
  };
    
    return(
        <div>
            <div className="form-section" ref={headerRef}>
                <h1>Book FREE Appointment</h1>
                <p>For Best Quality Construction At Affordable Rates</p>
                <div>
                    <form className='form-details' onSubmit={handleSubmit}>
                        <div className='form-inputs'>
                            <label htmlFor='name'>Full Name</label>
                            <input type='text' id = 'name' placeholder='Full Name' onChange={handleChange} value={formData.name}/>
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='number'>Mobile Number</label>
                            <input type='text' id = 'number' placeholder='Mobile Number' onChange={handleChange} value={formData.number}/>
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='plot'>Location of your plot</label>
                            <input type='text' id = 'plot' placeholder='Location of your plot' onChange={handleChange} value={formData.plot}/>
                        </div>
                        <div className='btn-content'>
                            <button type='submit'>Start your construction</button>
                            <p><span>*</span>By submitting this form, 
                               I confirm that I have read and agreed to accept Brick&Bolt's <span href='#'>privacy policy</span></p>
                        </div>
                    </form>
            </div>
            </div>
            
        </div>
    )
}
export default Form
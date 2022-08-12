import React from 'react';
import {about} from  '../data'

import Image from '../assets/img/man_about.png'

const About = () => {
  return <section>
<div className="container mx-auto">
  <h2 className='section title'> 
  <span className='dot'></span>
  </h2>
  <p className=' section-subtitle lg:mb-[60px] '></p>
<div  className='absolute w-32 h-32 bg-accent 
left-[38%] top-[42%] md:left-[50%]  md:top-[35px]  z-30 rounded-full'>
  
  <img className='mx-auto z-20 relative ' src={Image} alt="" />
</div>
</div>

  </section>;
};

export default About;

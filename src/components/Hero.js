import React from 'react';
import {RiFileDownloadFill} from 'react-icons/ri'
import Resume from './resume.pdf'
import Social from './Social'
import Man from '../assets/img/man_banner.png'
const Hero = () => {
  return <section className='pt-[100px] bg-herotext bg-contain bg-no-repeat bg-center lg:bg-top '
  id='home'
  >
<div className="container mx-auto">
  <div className='lg:flex text-center lg:text-left lg:max-w-[558px]  mt-12 '>
<h3 className='text-[18px] mb-1 lg:mb-[50px] '>Hi I am </h3>
<h2 className='text-[24px] lg:text-[32px] font-semibold text-accent mb-4 lg;mb-5'>Shahzaib Shafiq</h2>
<h1 className='text-[60px] md:text-[80px] lg:text-[100px] leading-none font-semibold mb-6'>Full Stack  <br /> <span className='lg:pl-[70px]'>Web Developer   </span>
<span className='w-3 h-3 md:w-5 md:h-5 inline-block  bg-accent rounded-full ml-2 '></span>
</h1>

<p 

className='mb-[35px] text-lg lg:text-xl text-center lg:text-left '>

  Web Developers Communicate with Clients so They Need Good Communication Skills 
</p>
<div className='max-auto max-w-min lg:m-0 relative z-10'>
  <Social/>
</div>
<a href={Resume} download>
<button className='btn bg-accent mx-auto lg:mx-0 mb-6 shadow-xl shadow-[#913030]'>Download My CV
<span className='text-xl ml-3 '><RiFileDownloadFill></RiFileDownloadFill></span>
</button>
</a>
  </div>
  
  <div className='flex-1 flex justify-center lg:justify-end relative xl:after:content-arrow xl:after:w-96 xl:after:h-96 xl:after:block xl:after:absolute xl:after:top-2/4 xl:after:-left-96'>
            <img className='z-20' src={Man} alt='' />
            <div className='w-[350px] h-[400px] sm:w-[553px] sm:h-[753px] bg-blob bg-contain bg-no-repeat mx-auto absolute top-[85px] z-10'></div>
          </div>



</div>

  </section>;
};

export default Hero;

import React from 'react';


import {services} from '../data'


const Services = () => {
  return <section className='section ' id='services'>
<div className="container mx-auto">
  <h2 className='section-title'>
    {services.title} <span className='dot'></span>
  </h2>
  <p className='section-subtitle'>{services.subtitle}</p>
<div className="flex flex-col items-center gap-y-12 lg:flex-row lg:justify-between lg:px-[136px] ">
  {services.skills.map((service,index)=>{


return <div  className='p-[30px] w-full max-x-[417px] flex flex-col text-center
lg:text-left hover:bg-slate-100 hover:shadow-md transition-all cursor-crosshair '>
<div className='h-20 w-20 mb-12 mx-auto lg:mx-0'>
  <img src={service.icon} alt="" />
</div>
<h2 className='font-semibold text-2xl mb-3'> {service.name}</h2>

<p  className='text-gray text-gray lg:mb-16'>{service.description}</p>

</div>
  }
  
  )}
</div>


</div>

  </section>;
};

export default Services;

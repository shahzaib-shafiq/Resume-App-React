import React from 'react';
import {contributors} from '../data'
const Contributors = () => {
  return <section className='section ' id='contributors'>

    <div className="container mx-auto">
      <h2 className='section-title'>
        {contributors.title}
      </h2>

      <p className='section-subtitle'>{contributors.subtitle}</p>

      <div>
        {contributors.brands.map((brand,index)=>
        {
          return <div className='max-w-[250px] h-24 flex items-center'>
<img src={brand.image} alt="" />

          </div>
        }
        )}
      </div>
    </div>
  </section>;
};

export default Contributors;

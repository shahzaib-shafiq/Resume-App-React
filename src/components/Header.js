import React, { useEffect, useState } from 'react';

// import nav data
import { nav } from '../data';

// import logo
import Logo from '../assets/img/ss.png';
import Logo1 from '../assets/img/s1.png';
import Logo2 from '../assets/img/s2.png';

// import react scroll link
import { Link } from 'react-scroll';

// import icons
import { RiBarChartHorizontalLine, RiCloseFill } from 'react-icons/ri';

const Header = () => {
  const [bg, setBg] = useState(false);
  const [showNav, setShowNav] = useState(false);

  // window scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 40 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <Link to='home' className='cursor-pointer'>
            <img className='object-contain h-120 w-440' src={Logo} alt='' />
            <img  src={Logo2} alt='' />
            <img  src={Logo1} alt='' />
            
          </Link>
          <ul
            className={`${
              showNav ? 'left-0' : '-left-full'
            } flex flex-col justify-center items-center fixed top-0 bg-accent text-white text-xl capitalize w-80 h-full gap-y-8 duration-200 transition-all`}
          >
            {nav.map((item, index) => {
              return (
                <li className='cursor-pointer' key={index}>
                  <Link
                    to={item.name}
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='transition-all'
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div onClick={() => setShowNav(!showNav)} className='cursor-pointer'>
            {showNav ? (
              <RiCloseFill className='w-8 h-8' />
            ) : (
              <RiBarChartHorizontalLine className='w-8 h-8' />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

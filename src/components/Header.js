import React from 'react';

//import components
import Logo from '../assets/img/logo.svg'
import Nav from './Nav'
import AccountBtns from './AccountBtns'


//import icons
import {CgMenuRight} from 'react-icons/cg'

const Header = ({setNavMobile}) => {
  return (
    <header className='py-[30px] lg:pt-[60px]' data-aos='fade-up' data-aos-delay='900' data-aos-duration='2000'>
      <div className='container mx-auto flex items-center justify-between'>
        {/*Logo*/}
        <a href='#'>
          <img src={Logo} alt=''></img>
        </a>

        {/*Nav and buttons*/}
        <div className='hidden lg:flex gap-x-[55px]'>
          <Nav/>
          <AccountBtns/>
        </div>

        {/*Open nav btn */}
        <div onClick={()=>setNavMobile(true)} className='lg:hidden cursor-pointer'>
          <CgMenuRight className='text-2xl'/>
        </div>
      </div>

    </header>
  );
  
};

export default Header;

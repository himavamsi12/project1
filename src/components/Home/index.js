import React from 'react';
import Navbar from '../Navbar/index';
import home from '../../assests/home.mp4';
import { IoIosArrowForward } from 'react-icons/io';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='bg-slate-50 flex flex-col justify-center lg:flex-row'>
        <div className='lg:w-1/2 pt-20 pl-9  lg:ml-16'>
          <a href="#" className='text-blue-800 font-bold'>
            <span className='border-solid border-2 border-zinc-300 bg-blue-700 px-4 py-0.5 mr-2 text-white rounded-full text-xl/1'>
              New
            </span>
            Surereach - Phone number and email id finder
          </a>
          <div className='flex flex-col mt-4'>
            <h1 className='text-black font-bold text-4xl lg:text-8xl'>The</h1>
            <h1 className='text-black font-bold text-4xl lg:text-8xl'>easiest way</h1>
            <p className='text-black text-4xl lg:text-5xl'>
              for enterprises to onboard verified customers
            </p>
            <p className='text-black text-xl mt-2 lg:text-2xl pt-6'>
              Start building with Surepass's API for{' '}
              <span className='text-black font-bold'>Free</span>
            </p>
            <div className='flex flex-col mr-6 lg:flex-row mt-8'>
              <button className='border-solid border-2 border-zinc-300 px-5 py-3 flex flex-row justify-between bg-black text-white rounded-md text-xl/6 lg:text-2xl'>
                Get API Keys <span className=''><IoIosArrowForward  /></span>
              </button>
              <button className='mt-4  lg:mt-0 ml-0 lg:ml-4 px-5 py-3 bg-white text-black rounded-md text-xl/6 lg:text-2xl'>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 relative'>
          <video src={home} className='w-full lg:ml-20 lg:mt-6' autoPlay loop muted />
        </div>
      </div>
    </>
  );
};

export default Home;

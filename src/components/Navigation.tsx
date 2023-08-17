import React from 'react';
import Image from 'next/image';

type Props = {};

const Navigation: React.FC<{}> = (props: Props) => {
  return (
    <nav className="flex flex-col bg-black h-[17vh]">
      <div className="h-1/3 flex flex-row justify-end px-1 items-center text-white">
        <div className="">
          <a href="" className="hover:text-slate-400">
            Search
          </a>
        </div>
        <div className=" ml-8">
          <a href="" className=" hover:text-slate-400">
            <span>CONTACT</span>
          </a>
        </div>
        <div className="p-2 hover:bg-[#666666] hover:text-white cursor-pointer ml-14 text-[#fac433]">
          <a href="">G</a>
        </div>
        <div className="p-2 hover:bg-orange-600 cursor-pointer">
          <a href="">Y</a>
        </div>
        <div className="p-2 hover:bg-orange-600 cursor-pointer">
          <a href="">In</a>
        </div>
        <div className="p-2 hover:bg-orange-600 cursor-pointer">
          <a href="">F</a>
        </div>
        <div className="p-2 hover:bg-orange-600 cursor-pointer">
          <a href="">M</a>
        </div>
      </div>
      <div className=" h-2/3 flex flex-row items-center justify-between text-white pl-8">
        <div className="">
          <div>
            <a href="/">
              <img
                src="https://bitnine.net/wp-content/uploads/2023/08/bitnine-logo_.png"
                alt="logo"
                className=" w-[235px] h-[61px]"
              />
            </a>
          </div>
        </div>
        <div className='flex flex-row text-lg'>
          <div className='ml-5'>
            <a href="">
              <span>PRODUCTS</span>
            </a>
          </div>
          <div className='ml-5'>
            <a href="">
              <span>USE CASES</span>
            </a>
          </div>
          <div className='ml-5'>
            <a href="">
              <span>SERVICES</span>
            </a>
          </div>
          <div className='ml-5'>
            <a href="">
              <span>RESOURCES</span>
            </a>
          </div>
          <div className='ml-5'>
            <a href="">
              <span>BLOG</span>
            </a>
          </div>
          <div className='ml-5'>
            <a href="">
              <span>COMPANY</span>
            </a>
          </div>
          <div className='ml-5'>
            <a href="">
              <span>IR</span>
            </a>
          </div>
          <div className='ml-3'>
            <button>TRY FREE</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

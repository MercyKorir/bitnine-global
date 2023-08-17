import React from 'react';
import Image from 'next/image';

type Props = {};

const Hero: React.FC<{}> = (props: Props) => {
  return (
    <section className="h-[83vh] bg-white">
      <div className="flex flex-col items-center p-16">
        <div className="">
          <img
            src="https://bitnine.net/wp-content/uploads/2022/04/AgenSQL-Logo.png"
            alt=""
            className="w-[301px] h-[61px]"
          />
        </div>
        <div className=" mt-10 mb-[10px]">
          <h3 className=" text-[21px] text-[#444444]">
            <strong className="font-bold">
              An integration of Bitnine’s DB technology and PG expertise
            </strong>
          </h3>
        </div>
        <div className="">
          <p className="text-[#666666] text-[18px] mb-[24px] text-center">
            AgensSQL is an all-new relational DBMS based on PostgreSQL, with
            years of expertise
            <br />
            and knowledge accumulated through database research and development.
          </p>
          <p className="text-[#666666] text-[18px] mb-[24px] text-center">
            The enterprise package, along with AgensSQL engine, is an all-in-one
            solution that ensures
            <br />
            the efficiency and scalability of data management.
          </p>
          <p className="text-[#666666] text-[18px] mb-[10px] text-center">
            Get AgensSQL now for stable operation and management services at a
            reduced
            <br />
            maintenance cost.
          </p>
        </div>
        <div className=' flex flex-row justify-between gap-10 text-white mt-16'>
            <div className='bg-[#022EA9] px-5 py-2 rounded-[0.225rem] hover:text-[#fac433] cursor-pointer'>
                <a href="" className=''>
                    <span className=' font-semibold'>CONTACT</span>
                </a>
            </div>
            <div className='bg-[#022EA9] px-5 py-2 rounded-[0.225rem] hover:text-[#fac433] cursor-pointer'>
                <a href="" className=''>
                    <span className=' font-semibold'>BROCHURE</span>
                </a>
            </div>
            <div className='bg-[#022EA9] px-5 py-2 rounded-[0.225rem] hover:text-[#fac433] cursor-pointer'>
                <a href="" className=''>
                    <span className=' font-semibold'>BLOG</span>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

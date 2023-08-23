import React from 'react';

type Props = {};

const Footer: React.FC<{}> = (props: Props) => {
  return (
    <section className="max-h-[40vh] bg-[#1E2329] hidden lg:flex">
      <footer className="py-[64px] text-[14.4px] leading-[25px] px-[250px] text-white flex flex-row justify-between">
        <div className='flex flex-col'>
          <div className=' mb-2 font-bold'>PRODUCTS</div>
          <div className='flex flex-col gap-1'>
            <div>
              <a href="" className='  hover:text-[#4a8eff]'>Relational Databases</a>
            </div>
            <div>
              <a href="" className=' hover:text-[#4a8eff]'>Graph Database</a>
            </div>
            <div>
              <a href="" className=' hover:text-[#4a8eff]'>Graph-based Solution</a>
            </div>
          </div>
        </div>
        <div>
          <a className=' mb-2 font-bold hover:text-[#4a8eff]' href="">USE CASES</a>
        </div>
        <div>
          <a className=' mb-2 font-bold hover:text-[#4a8eff]' href="">SERVICES</a>
        </div>
        <div className='flex flex-col'>
          <div className=' mb-2 font-bold'>RESOURCES</div>
          <div className='flex flex-col gap-1'>
            <div>
              <a href="" className='hover:text-[#4a8eff]'>Documentation</a>
            </div>
            <div>
              <a href="" className='hover:text-[#4a8eff]'>Learn</a>
            </div>
          </div>
        </div>
        <div>
          <a className=' mb-2 font-bold hover:text-[#4a8eff]' href="">BLOG</a>
        </div>
        <div className='flex flex-col'>
          <div className=' mb-2 font-bold'>COMPANY</div>
          <div className='flex flex-col gap-1'>
            <div>
              <a href="" className='hover:text-[#4a8eff]'>About Us</a>
            </div>
            <div>
                <a href="" className='hover:text-[#4a8eff]'>Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

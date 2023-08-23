import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

type Props = {};

const Hero: React.FC<{}> = (props: Props) => {
  return (
    <section className={`min-h-fit bg-white mt-[17vh]`}>
      <div className="flex flex-col items-center p-8 px-2 xxs:px-4 xs:px-6 sm:p-16 pb-16 sm:pb-24">
        <div className="">
          <Image
            src={
              'https://bitnine.net/wp-content/uploads/2022/04/AgenSQL-Logo.png'
            }
            alt="AgensSQL Image"
            width={301}
            height={61}
            className="w-[240px] h-[45px] sm:w-[301px] sm:h-[61px]"
          />
        </div>
        <div className="mt-6 sm:mt-10 mb-[8px] xxs:mb-[10px] text-center">
          <h3 className="text-[17px] xxs:text-[19px] sm:text-[21px] text-[#444444]">
            <strong className="font-bold">
              An integration of Bitnine’s DB technology and PG expertise
            </strong>
          </h3>
        </div>
        <div className="">
          <p className="text-[#666666] text-[13px] xxs:text-[14.5px] sm:text-[18px] mb-[13px] sm:mb-[24px] text-center">
            AgensSQL is an all-new relational DBMS based on PostgreSQL, with
            years of expertise
            <br />
            and knowledge accumulated through database research and development.
          </p>
          <p className="text-[#666666] text-[13px] xxs:text-[14.5px] sm:text-[18px] mb-[13px] sm:mb-[24px] text-center">
            The enterprise package, along with AgensSQL engine, is an all-in-one
            solution that ensures
            <br />
            the efficiency and scalability of data management.
          </p>
          <p className="text-[#666666] text-[13px] xxs:text-[14.5px] sm:text-[18px] mb-[13px] sm:mb-[10px] text-center">
            Get AgensSQL now for stable operation and management services at a
            reduced
            <br />
            maintenance cost.
          </p>
        </div>
        <div className=" flex flex-row justify-between gap-3 xxs:gap-5 sm:gap-10 text-white mt-10 sm:mt-16">
          <div
            className={`${styles.heroButton} bg-[#022EA9] flex justify-center text-[13.5px] xxs:text-[14px] sm:text-base items-center px-4 py-2 xxs:px-5 xxs:py-2 sm:px-5 sm:py-2 rounded-[0.225rem] hover:text-[#fac433] cursor-pointer`}
          >
            <a href="" className="">
              <span className=" font-semibold">CONTACT</span>
            </a>
          </div>
          <div
            className={`${styles.heroButton} bg-[#022EA9] flex justify-center text-[13.5px] xxs:text-[14px] sm:text-base items-center px-4 py-2 xxs:px-5 xxs:py-2 sm:px-5 sm:py-2 rounded-[0.225rem] hover:text-[#fac433] cursor-pointer`}
          >
            <a href="" className="">
              <span className=" font-semibold">BROCHURE</span>
            </a>
          </div>
          <div
            className={`${styles.heroButton} bg-[#022EA9] flex justify-center text-[13.5px] xxs:text-[14px] sm:text-base items-center px-4 py-2 xxs:px-5 xxs:py-2 sm:px-5 sm:py-2 rounded-[0.225rem] hover:text-[#fac433] cursor-pointer`}
          >
            <a href="" className="">
              <span className=" font-semibold">BLOG</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { useSession } from 'next-auth/react';
import {
  faFacebook,
  faGithub,
  faYoutube,
  faLinkedinIn,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
library.add(
  faFacebook,
  faGithub,
  faYoutube,
  faLinkedinIn,
  faMedium,
  faSearch,
  faUser,
  faBars
);

type Props = {};

const Navigation: React.FC<{}> = (props: Props) => {
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isScrolled]);
  return (
    <nav
      className={`flex flex-col bg-black min-h-fit w-full fixed top-0 z-50 ${
        isScrolled ? 'pb-3' : 'pb-5'
      }`}
    >
      <div
        className={`h-[45px] bg-color-gradient w-full text-white hover:text-[#fac433] justify-center items-center text-[15px] xs:text-[18px] transform transition-all duration-300 ease-in-out ${
          isScrolled ? 'flex' : 'hidden'
        }`}
      >
        <a href="">AgensSQL로 보안 기능들을 강화시키세요.</a>
      </div>
      <div className="h-1/3 hidden lg:flex lg:flex-row justify-end px-1 items-center text-white">
        <div className="">
          <a href="" className="hover:text-slate-400">
            <FontAwesomeIcon className="w-[18px] h-[18px]" icon={faSearch} />
          </a>
        </div>
        <div className=" ml-8">
          <a
            href=""
            className=" hover:text-slate-400 transition-all duration-200 ease-in-out"
          >
            <span className="">CONTACT</span>
          </a>
        </div>
        <div
          className={`p-2 ${styles.topBottomG} hover:text-white cursor-pointer ml-14 text-[#fac433]`}
        >
          <a href="">
            <FontAwesomeIcon className="w-5 h-5" icon={faGithub} />
          </a>
        </div>
        <div className={`p-2 ${styles.topBottomY} cursor-pointer`}>
          <a href="">
            <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faYoutube} />
          </a>
        </div>
        <div className={`p-2 ${styles.topBottomL} cursor-pointer`}>
          <a href="">
            <FontAwesomeIcon
              className=" bg-transparent w-5 h-5"
              icon={faLinkedinIn}
            />
          </a>
        </div>
        <div className={`p-2 ${styles.topBottomF} cursor-pointer`}>
          <a href="">
            <FontAwesomeIcon className="w-5 h-5" icon={faFacebook} />
          </a>
        </div>
        <div className={`p-2 ${styles.topBottomM} cursor-pointer`}>
          <a href="">
            <FontAwesomeIcon className="w-[23px] h-[23px]" icon={faMedium} />
          </a>
        </div>
      </div>

      <div className=" h-2/3 flex flex-row w-full flex-wrap lg:flex-nowrap items-center justify-between text-white px-5 sm:px-10 lg:px-0 lg:pl-8 pt-4 lg:pt-0">
        <div className="">
          <div>
            <a href="/">
              <Image
                src={
                  'https://bitnine.net/wp-content/uploads/2023/08/bitnine-logo_.png'
                }
                alt="Logo Image"
                width={235}
                height={61}
                className='w-[110px] h-[30px] sm:w-[180px] sm:h-[45px] lg:w-[180px] lg:h-[40px]'
              />
            </a>
          </div>
        </div>
        <button
          className=" ml-auto sm:mr-5 inline-flex cursor-pointer text-white lg:hidden"
          onClick={handleClick}
        >
          <FontAwesomeIcon className="w-[28px] h-[26px] sm:w-[32px] sm:h-[30px] md:w-[40px] md:h-[40px]" icon={faBars} />
        </button>
        <div className="lg:mr-2 xl:mr-5 w-full lg:w-auto">
          <ul
            className={`${
              isOpen ? 'hidden' : ''
            } lg:flex lg:flex-row sm:text-lg lg:text-sm xl:text-base items-center lg:mt-0 mt-4 sm:mt-6`}
          >
            <li className="lg:ml-5 ml-0 mb-4 sm:mb-5 lg:mb-0">
              <a href="" className="hover:text-[#fac433]">
                <span>PRODUCTS</span>
              </a>
            </li>
            <li className="lg:ml-4 xl:ml-5 ml-0 mb-4 sm:mb-5 lg:mb-0">
              <a href="" className="hover:text-[#fac433]">
                <span>USE CASES</span>
              </a>
            </li>
            <li className="lg:ml-4 xl:ml-5 ml-0 mb-4 sm:mb-5 lg:mb-0">
              <a href="" className="hover:text-[#fac433]">
                <span>SERVICES</span>
              </a>
            </li>
            <li className="lg:ml-4 xl:ml-5 ml-0 mb-4 sm:mb-5 lg:mb-0">
              <a href="" className="hover:text-[#fac433]">
                <span>RESOURCES</span>
              </a>
            </li>
            <li className="lg:ml-4 xl:ml-5 ml-0 mb-4 sm:mb-5 lg:mb-0">
              <a href="" className="hover:text-[#fac433]">
                <span>BLOG</span>
              </a>
            </li>
            <li className="lg:ml-4 xl:ml-5 ml-0 mb-4 sm:mb-5 lg:mb-0">
              <a href="" className="hover:text-[#fac433]">
                <span>COMPANY</span>
              </a>
            </li>
            <li className="lg:ml-4 xl:ml-5 ml-0 mb-4 sm:mb-5 lg:mb-0">
              <a href="" className="hover:text-[#fac433]">
                <span>IR</span>
              </a>
            </li>
            <li className="lg:ml-4 xl:ml-5 ml-0 mb-4 sm:mb-5 lg:mb-0">
              <button className=" bg-[#022EA9] px-3 py-1 rounded-[0.225rem]">
                <a href="" className="hover:text-[#fac433]">
                  TRY FREE
                </a>
              </button>
            </li>
            <li className="lg:ml-4 xl:ml-5 ml-0 mb-0 sm:mb-2 lg:mb-0">
              {session ? (
                <Link href="/profile">
                  <FontAwesomeIcon
                    className="w-[23px] h-[23px]"
                    icon={faUser}
                  />
                </Link>
              ) : (
                <Link href="/login">
                  <button className=" bg-[#022EA9] px-3 py-1 rounded-[0.225rem] hover:text-[#fac433]">
                    LOGIN
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

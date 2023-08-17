import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faYoutube,
  faLinkedinIn,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
library.add(faFacebook, faGithub, faYoutube, faLinkedinIn, faMedium, faSearch);

type Props = {};

const Navigation: React.FC<{}> = (props: Props) => {
  return (
    <nav className="flex flex-col bg-black h-[17vh]">
      <div className="h-1/3 flex flex-row justify-end px-1 items-center text-white">
        <div className="">
          <a href="" className="hover:text-slate-400">
            <FontAwesomeIcon className="w-[18px] h-[18px]" icon={faSearch} />
          </a>
        </div>
        <div className=" ml-8">
          <a href="" className=" hover:text-slate-400">
            <span>CONTACT</span>
          </a>
        </div>
        <div className="p-2 hover:bg-[#666666] hover:text-white cursor-pointer ml-14 text-[#fac433]">
          <a href="">
            <FontAwesomeIcon className="w-5 h-5" icon={faGithub} />
          </a>
        </div>
        <div className="p-2 hover:bg-red-600 cursor-pointer">
          <a href="">
            <FontAwesomeIcon className="w-[21px] h-[21px]" icon={faYoutube} />
          </a>
        </div>
        <div className="p-2 hover:bg-[#0077b5] cursor-pointer">
          <a href="">
            <FontAwesomeIcon className=" bg-transparent w-5 h-5" icon={faLinkedinIn} />
          </a>
        </div>
        <div className="p-2 hover:bg-[#3b5998] cursor-pointer">
          <a href="">
            <FontAwesomeIcon className="w-5 h-5" icon={faFacebook} />
          </a>
        </div>
        <div className="p-2 hover:bg-[#30b570] cursor-pointer">
          <a href="">
            <FontAwesomeIcon className="w-[23px] h-[23px]" icon={faMedium} />
          </a>
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
        <div className=" mr-5">
          <ul className="flex flex-row text-lg items-center">
            <li className="ml-5">
              <a href="" className="hover:text-[#fac433]">
                <span>PRODUCTS</span>
              </a>
            </li>
            <li className="ml-5">
              <a href="" className="hover:text-[#fac433]">
                <span>USE CASES</span>
              </a>
            </li>
            <li className="ml-5">
              <a href="" className="hover:text-[#fac433]">
                <span>SERVICES</span>
              </a>
            </li>
            <li className="ml-5">
              <a href="" className="hover:text-[#fac433]">
                <span>RESOURCES</span>
              </a>
            </li>
            <li className="ml-5">
              <a href="" className="hover:text-[#fac433]">
                <span>BLOG</span>
              </a>
            </li>
            <li className="ml-5">
              <a href="" className="hover:text-[#fac433]">
                <span>COMPANY</span>
              </a>
            </li>
            <li className="ml-5">
              <a href="" className="hover:text-[#fac433]">
                <span>IR</span>
              </a>
            </li>
            <li className="ml-5">
              <button className=" bg-[#022EA9] px-3 py-1 rounded-[0.225rem]">
                <a href="" className="hover:text-[#fac433]">
                  TRY FREE
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopyright} from '@fortawesome/free-regular-svg-icons'
import {
  faFacebook,
  faGithub,
  faYoutube,
  faLinkedinIn,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
library.add(
  faFacebook,
  faGithub,
  faYoutube,
  faLinkedinIn,
  faMedium,
  faCopyright
);

type Props = {};

const Footer2: React.FC<{}> = (props: Props) => {
  return (
    <section className="min-h-[10vh] bg-[#1E2329] py-[32px] px-[230px] overflow-x-hidden">
      <div className="flex flex-row justify-between items-center text-[#ababab] text-[14.4px] leading-[20px] text-center">
        <div className=" font-[400px]">
          <FontAwesomeIcon
            className="w-[14.4px] h-[14.4px]"
            icon={faCopyright}
          />
          {' '}
          2023 by Bitnine Global Inc. All Rights Reserved.
        </div>
        <div className="flex flex-row justify-end items-center text-[#ababab] text-[14.4px] leading-[20px] text-center">
          <div className="p-2 hover:bg-[#666666] hover:text-white cursor-pointer ml-14 text-[#fac433]">
            <a href="">
              <FontAwesomeIcon className="w-5 h-5" icon={faGithub} />
            </a>
          </div>
          <div className="p-2 hover:bg-red-600 cursor-pointer hover:text-white">
            <a href="">
              <FontAwesomeIcon className="w-[21px] h-[21px]" icon={faYoutube} />
            </a>
          </div>
          <div className="p-2 hover:bg-[#0077b5] cursor-pointer hover:text-white">
            <a href="">
              <FontAwesomeIcon
                className=" bg-transparent w-5 h-5"
                icon={faLinkedinIn}
              />
            </a>
          </div>
          <div className="p-2 hover:bg-[#3b5998] cursor-pointer hover:text-white">
            <a href="">
              <FontAwesomeIcon className="w-5 h-5" icon={faFacebook} />
            </a>
          </div>
          <div className="p-2 hover:bg-[#30b570] cursor-pointer hover:text-white">
            <a href="">
              <FontAwesomeIcon className="w-[23px] h-[23px]" icon={faMedium} />
            </a>
          </div>
          <div className=" ml-8">
            <a href="" className=" hover:text-[#4a8eff]">
              <span>CONTACT</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer2;

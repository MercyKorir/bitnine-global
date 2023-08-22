import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faChevronUp);

type Props = {};

const BackToTop: React.FC<{}> = (props: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`${
        scrollPosition > 800 ? 'block' : 'hidden'
      } fixed bottom-[15px] right-[15px] flex items-center justify-center w-[50px] h-[50px] leading-[48px] rounded-[5px] z-50 bg-[rgba(0,0,0,0.3)] hover:bg-[#0082cb] cursor-pointer text-white text-[30px] font-bold transform transition-all duration-500 ease-in-out`}
    >
      <FontAwesomeIcon className="w-[30px] h-[40px]" icon={faChevronUp} />
    </button>
  );
};

export default BackToTop;

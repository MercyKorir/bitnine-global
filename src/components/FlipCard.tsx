import React from 'react';
import styles from '../styles/FlipCard.module.css';

interface FlipCardProps {
  frontTitle: string;
  backItems: string[];
}

const FrontOfCard: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="absolute inset-0 flex transition-all duration-100 delay-150 z-20 hover:opacity-0 h-full w-full border-2 rounded-[8px] bg-white border-[#0082CB] px-6 py-4 items-center justify-center">
      <h4 className="text-[16px] text-center text-[#0082cb]">{title}</h4>
    </div>
  );
};

const BackOfCard: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <div
      className={`${styles.cardBack} absolute inset-0 w-full h-full flex justify-start items-center bg-[#0082CB] transition-all z-10 px-6 text-[12px] xs:text-[14px]`}
    >
      <ul className=' list-disc'>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const FlipCard: React.FC<FlipCardProps> = ({ frontTitle, backItems }) => {
  return (
    <div
      className={`relative h-[75px] w-[300px] xxs:w-[340px] xxs:h-[80px] xs:h-[85px] xs:w-[400px] sm:h-[85px] sm:w-[500px] rounded-[8px] text-white overflow-hidden transition-all duration-500 ${styles.card}`}
    >
      <FrontOfCard title={frontTitle} />
      <BackOfCard items={backItems} />
    </div>
  );
};

export default FlipCard;

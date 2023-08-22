import React, { useEffect, useState } from 'react';
import styles from '@/styles/FadeInCard.module.css';
import Image from 'next/image';

interface FadeInCardProps {
  imageUrl: string;
  backItems: string[];
}

const FadeInCard: React.FC<FadeInCardProps> = ({ imageUrl, backItems }) => {
  return (
    <div
      className={`${styles.card} w-1/3 min-w-[330px] min-h-[230px] shadow-custom border-[1px] border-[#D1D1D1] hover:border-[#0082CB] bg-white rounded-[10px] h-fit px-[5%] py-[3%] relative`}
    >
      <Image
        src={imageUrl}
        alt=""
        width={300}
        height={200}
        className={`h-auto max-w-full ${styles.cardText}`}
      />
      <ul className={`list-disc ${styles.cardText} text-[#666666] text-[14px] flex flex-col justify-center ml-[15px] mr-[20px]`}>
        {backItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FadeInCard;

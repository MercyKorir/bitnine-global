import React from 'react';
import Image from 'next/image';

type Props = {};

const Features: React.FC<{}> = (props: Props) => {
  return (
    <section className="bg-white max-h-[100vh] py-16 px-2 xs:px-0 xs:py-20">
      <div className="flex flex-col items-center">
        <div className="flex flex-col mb-9 xs:mb-11">
          <div className=" mb-4">
            <h2 className="text-center text-[30px] xs:text-[34px]">
              <strong>Key features</strong>
            </h2>
          </div>
          <div>
            <p className="text-center text-[12px] text-[#666666] xs:text-base">
              Manage your data with Agens Enterprise Package
              <br />
              Essential enterprise features such as high availability and
              sharding are provided
            </p>
          </div>
        </div>
        <div>
          <Image
            src={
              'https://bitnine.net/wp-content/uploads/2022/04/img_key-features_eng.png'
            }
            alt="Features Image"
            width={1100}
            height={432}
            className='w-[300px] h-[135px] xxs:w-[350px] xxs:h-[175px] xs:w-[395px] xs:h-[185px] sm:w-[600px] sm:h-[252px] lg:w-[800px] lg:h-[350px] xl:w-[1100px] xl:h-[432px]'
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

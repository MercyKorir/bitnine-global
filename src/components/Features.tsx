import React from 'react';
import Image from 'next/image';

type Props = {};

const Features: React.FC<{}> = (props: Props) => {
  return (
    <section className="bg-white max-h-[100vh] py-20">
      <div className="flex flex-col items-center">
        <div className="flex flex-col mb-11">
          <div className=" mb-4">
            <h2 className="text-center text-[34px]">
              <strong>Key features</strong>
            </h2>
          </div>
          <div>
            <p className="text-center text-[#666666]">
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
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

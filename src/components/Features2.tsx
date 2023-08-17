import React from 'react';

type Props = {};

const Features2: React.FC<{}> = (props: Props) => {
  return (
    <section className="max-h-[100vh] bg-[#F3F6FB] py-20 pb-[90px]">
      <div className='flex flex-col items-center'>
        <div className='flex flex-col'>
          <div>
            <h2 className=' text-center text-black text-[34px]'>
              <strong>AgensSQL DB Engine</strong>
            </h2>
          </div>
          <div className=' mt-3'>
            <h5 className=' text-center'>
              <span>
                <strong className='text-[20px] text-[#444444] underline'>Enhanced Data Security</strong>
              </span>
            </h5>
          </div>
        </div>
        <div className=' mt-8'>
          <p className='text-center text-[#666666] text-[18px]'>
            AgensSQL is a PostgreSQL-based DBMS
            <br />
            that guarantees optimal security and stability.
          </p>
        </div>
        <div className='flex flex-row gap-5 px-60 mt-14'>
          <div className=' w-1/3 shadow-custom border-[1px] border-[#D1D1D1] bg-white rounded-[10px] h-fit px-[5%] py-[3%]'>
            <img
              src="https://bitnine.net/wp-content/uploads/2022/04/Password-Profile.png"
              alt=""
              className=" h-auto max-w-full"
            />
          </div>
          <div className=' w-1/3 shadow-custom border-[1px] border-[#D1D1D1] bg-white rounded-[10px] h-fit px-[5%] py-[3%]'>
            <img
              src="https://bitnine.net/wp-content/uploads/2022/04/Data-Redaction.png"
              alt=""
              className="h-auto max-w-full"
            />
          </div>
          <div className=' w-1/3 shadow-custom border-[1px] border-[#D1D1D1] bg-white rounded-[10px] h-fit px-[5%] py-[3%]'>
            <img
              src="https://bitnine.net/wp-content/uploads/2022/04/Auditing.png"
              alt=""
              className="h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;

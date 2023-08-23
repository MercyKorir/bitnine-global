import React from 'react';
import FadeInCard from './FadeInCard';

type Props = {};

const Features2: React.FC<{}> = (props: Props) => {
  return (
    <section className="min-h-fit bg-[#F3F6FB] py-14 xs:py-20 pb-[90px]">
      <div className="flex flex-col items-center">
        <div className="flex flex-col">
          <div>
            <h2 className=" text-center text-black text-[25px] xs:text-[30px] sm:text-[34px]">
              <strong>AgensSQL DB Engine</strong>
            </h2>
          </div>
          <div className=" mt-3">
            <h5 className=" text-center">
              <span>
                <strong className="text-[18px] xs:text-[19px] sm:text-[20px] text-[#444444] underline">
                  Enhanced Data Security
                </strong>
              </span>
            </h5>
          </div>
        </div>
        <div className=" mt-5 xs:mt-8 px-2 xs:px-0">
          <p className="text-center text-[#666666] text-[13px] xs:text-[16px] sm:text-[18px]">
            AgensSQL is a PostgreSQL-based DBMS
            <br />
            that guarantees optimal security and stability.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:px-60 mt-11 xs:mt-14">
          <FadeInCard
            imageUrl="https://bitnine.net/wp-content/uploads/2022/04/Password-Profile.png"
            backItems={[
              'user password policy reinforces login security',
              'excessive failed login attempts lock an account',
              'define rules for password complexity',
            ]}
          />

          <FadeInCard
            imageUrl="https://bitnine.net/wp-content/uploads/2022/04/Data-Redaction.png"
            backItems={[
              'enhanced data security of user personal information',
              'resolve privacy issues in preparation for security audits',
              'encryption or masking with unidentifiable special characters',
            ]}
          />

          <FadeInCard
            imageUrl="https://bitnine.net/wp-content/uploads/2022/04/Auditing.png"
            backItems={[
              'monitors database activities and collects data',
              'traces object accessed or DDL &amp; DML statements executed by a user',
              'records all actions in logs',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Features2;

import React from 'react';
import Image from 'next/image';
import FlipCard from './FlipCard';

type Props = {};

const Package: React.FC<{}> = (props: Props) => {
  return (
    <section className="min-h-fit bg-white px-3 xs:px-0 sm:px-5 md:px-0 py-16 xs:py-20">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col">
          <div className=" mb-[14px]">
            <h2 className="text-center text-black text-[23px] xs:text-[30px] sm:text-[34px]">
              <strong>Agens Enterprise Package</strong>
            </h2>
          </div>
          <div>
            <p className="text-center text-[#666666] text-[12px] xs:text-[16px] sm:text-[18px]">
              Agens Enterprise Package comes with a high availability management
              server that
              <br />
              supports backup and data monitoring dashboard that helps
              enterprise customers manage their data efficiently.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="w-1/2 flex flex-col items-center">
            <div>
              <h5 className="text-center">
                <strong className="text-[18px] xs:text-[19px] sm:text-[20px] text-[#444444]">
                  Agens HA Manager
                </strong>
              </h5>
            </div>
            <div className="mb-[10px] mt-[17px] xs:mt-[20px] text-[18px] xs:text-[20px]">
              <h5 className="text-center text-[13px] xs:text-base text-[#444444]">
                <strong className="text-[#0082cb]">HA Clustering</strong> –
                Failover/Failback, Load-balancing
              </h5>
            </div>
            <div className=" mb-5">
              <Image
                src={
                  'https://bitnine.net/wp-content/uploads/2022/04/img_AHM_eng-1024x922.png'
                }
                alt="HA Manager Image"
                width={600}
                height={400}
                className="w-[245px] xxs:w-[400px] xs:w-[600px] h-auto"
              />
            </div>
            <div>
              <h5 className="text-[#444444] text-[18px] xs:text-[20px]">Replication</h5>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center mt-5 lg:mt-0">
            <div>
              <h5 className="text-center">
                <strong className="text-[18px] xs:text-[19px] sm:text-[20px] text-[#444444]">
                  Agens Enterprise Manager
                </strong>
              </h5>
            </div>
            <div className="mt-[20px] gap-[12px] flex flex-col">
              <FlipCard
                frontTitle="Backup/Restore"
                backItems={[
                  'provides a convenient interface for backup & restore',
                  'provides backup & restore features for DB and table objects',
                ]}
              />
              <FlipCard
                frontTitle="DB Monitoring Dashboard"
                backItems={[
                  'monitors real-time session & transaction lock',
                  'provides status for server CPU & memory',
                ]}
              />
              <FlipCard
                frontTitle="Schedule Management"
                backItems={[
                  'provides module for script, SQL job, & scheduling management',
                  'provides UX dedicated to scheduling',
                ]}
              />
              <FlipCard
                frontTitle="Database Audit"
                backItems={[
                  'enables auditing via user interface',
                  'view audit results via user interface',
                ]}
              />
              <FlipCard
                frontTitle="SQL Monitoring"
                backItems={[
                  'collects query statistics required for performance analysis',
                  'extracts monitoring results in query',
                ]}
              />
              <FlipCard
                frontTitle="Performance Management"
                backItems={[
                  'monitors and collects operation status & statistical data',
                  'provides status reports required for improving performance',
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;

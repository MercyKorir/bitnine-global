import React from 'react';

type Props = {};

const Package: React.FC<{}> = (props: Props) => {
  return (
    <section className="min-h-[100vh] bg-white py-20">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col">
          <div className=" mb-[14px]">
            <h2 className="text-center text-black text-[34px]">
              <strong>Agens Enterprise Package</strong>
            </h2>
          </div>
          <div>
            <p className="text-center text-[#666666] text-[18px]">
              Agens Enterprise Package comes with a high availability management
              server that
              <br />
              supports backup and data monitoring dashboard that helps
              enterprise customers manage their data efficiently.
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2 flex flex-col items-center">
            <div>
              <h5 className="text-center">
                <strong className="text-[20px] text-[#444444]">
                  Agens HA Manager
                </strong>
              </h5>
            </div>
            <div className="mb-[10px] mt-[20px] text-[20px]">
              <h5 className="text-center text-[#444444]">
                <strong className="text-[#0082cb]">HA Clustering</strong> –
                Failover/Failback, Load-balancing
              </h5>
            </div>
            <div className=" mb-5">
              <img
                className="h-auto w-[600px]"
                src="https://bitnine.net/wp-content/uploads/2022/04/img_AHM_eng-1024x922.png"
                alt=""
              />
            </div>
            <div>
              <h5 className="text-[#444444] text-[20px]">Replication</h5>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <div>
              <h5 className="text-center">
                <strong className="text-[20px] text-[#444444]">
                  Agens Enterprise Manager
                </strong>
              </h5>
            </div>
            <div className="mt-[20px] gap-[12px] flex flex-col">
              <div className="h-[85px] w-[500px] border-2 rounded-[8px] bg-white border-[#0082CB] px-6 py-4 flex flex-col items-center justify-center">
                <h4 className="text-[16px] text-center text-[#0082cb]">
                  Backup/Restore
                </h4>
              </div>
              <div className="h-[85px] w-[500px] border-2 rounded-[8px] bg-white border-[#0082CB] px-6 py-4 flex flex-col items-center justify-center">
                <h4 className="text-[16px] text-[#0082cb] text-center">
                  DB Monitoring Dashboard
                </h4>
              </div>
              <div className="h-[85px] w-[500px] border-2 rounded-[8px] bg-white border-[#0082CB] px-6 py-4 flex flex-col items-center justify-center">
                <h4 className="text-[16px] text-[#0082cb] text-center">
                  Schedule Management
                </h4>
              </div>
              <div className="h-[85px] w-[500px] border-2 rounded-[8px] bg-white border-[#0082CB] px-6 py-4 flex flex-col items-center justify-center">
                <h4 className="text-[16px] text-[#0082cb] text-center">
                  Database Audit
                </h4>
              </div>
              <div className="h-[85px] w-[500px] border-2 rounded-[8px] bg-white border-[#0082CB] px-6 py-4 flex flex-col items-center justify-center">
                <h4 className="text-[16px] text-[#0082cb] text-center">
                  SQL Monitoring
                </h4>
              </div>
              <div className="h-[85px] w-[500px] border-2 rounded-[8px] bg-white border-[#0082CB] px-6 py-4 flex flex-col items-center justify-center">
                <h4 className="text-[16px] text-[#0082cb] text-center">
                  Performance Management
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;

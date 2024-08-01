import React from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Marquee from '../Components/Marquee';
import PnlAnalysis from '../Components/PnlAnalysis';
import DonutChart from '../Components/DonutChart';
import NetWorth from '../Components/NetWorth';
import Detail from '../Components/Detail';

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <div className="">
          <Marquee />
          <div>
            <div className='flex flex-row justify-between'>
              <div style={{ width: "75%" }}>
                <div className='flex flex-row gap-1' >
                  <div style={{ width: "55%" }}>
                    <NetWorth />
                  </div>
                  <div style={{ width: "100%" }}>
                    <DonutChart />
                  </div>
                </div>
                <div className='mt-2'>
                <Detail />
                </div>
              </div>
              <div style={{ width: "30%" }}>
                <PnlAnalysis />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

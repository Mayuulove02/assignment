import React from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Marquee from '../Components/Marquee';
import PnlAnalysis from '../Components/PnlAnalysis';
import DonutChart from '../Components/DonutChart';
import NetWorth from '../Components/NetWorth';

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <div className="">
          <Marquee />
          <div>
          {/* <PnlAnalysis /> */}
          {/* <DonutChart /> */}
          {/* <NetWorth /> */}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

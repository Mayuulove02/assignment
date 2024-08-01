import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'tailwindcss/tailwind.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ['BNB Wallet', 'Pollygon Wallet', 'Trust Wallet', 'Metamask', 'OKX Wallet', 'Token Pocket', "1 Inch wallet", "Coin Base"],
    datasets: [
      {
        label: 'My First Dataset',
        data: [5, 5, 5, 5, 5, 12, 5, 5],
        backgroundColor: ['#F5B659', '#8EC536', '#F29A76', '#ECE8DD', '#F1625C', '#246176', "#93D3D4", "#67CCEE"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    aspectRatio: 1,
    cutout: '70%',
    animation: {
      animateRotate: false,
    },
  };

  const data1 = [
    {
      text: "BNB Wallet",
      number: "153",
      color: "#F5B659"
    },
    {
      text: "OKX Wallet",
      number: "12",
      color: "#F1625C"
    },
    {
      text: "Pollygon Wallet",
      number: "32",
      color: "#8EC536"
    },
    {
      text: "Token Pocket",
      number: "84",
      color: "#246176"
    },
    {
      text: "Trust Wallet",
      number: "107",
      color: "#F29A76"
    },
    {
      text: "1 Inch Wallet",
      number: "98",
      color: "#ECE8DD"
    },
    {
      text: "Metamask",
      number: "220",
      color: "#67CCEE"
    },
    {
      text: "Coin Base",
      number: "42",
      color: "#93D3D4"
    },
  ];

  return (
    <div className='rounded-lg border border-gray-200'>
      <h3 className='bg-[#FFFDD2] text-[#000] text-center p-2 mb-4 text-2xl'>Wallets</h3>
      <div className="relative w-72 h-72 mx-auto mb-8">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-lg font-medium bg-black text-white rounded-full px-2">Wallet</span>
            <p className="font-semibold text-2xl">26</p>
            <span className="text-xs">Total <br /> Wallets</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 px-4 mb-2" style={{margin:"auto"}}>
        {data1.map((item, index) => (
          <div key={index} className="flex items-center gap-4 text-left">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
            <div className="flex-1">
              <p className="font-semibold text-xs">{item.text}</p>
              <p className="text-sm">{item.number} users</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;

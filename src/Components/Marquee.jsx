import React from 'react';
import binance from "../Assests/Marquee/binance.svg";
import coinbase from "../Assests/Marquee/coinbase.svg";
import './Marquee.css';

const Marquee = () => {
  const data = [
    {
      img: binance,
      color: "#F0B90B",
      text: "Binance",
      text1: "Price",
      price1: "$123,455",
      text2: "24hr Volume",
      price2: "$123,455 B",
      text3: "24hr Change",
      price3: "-23.00%",
      text4: "Market Cap",
      price4: "2346B"
    },
    {
      img: coinbase,
      color: "#23AF91",
      text: "Coinbase",
      text1: "Price",
      price1: "$123,455",
      text2: "24hr Volume",
      price2: "$123,455 B",
      text3: "24hr Change",
      price3: "-23.00%",
      text4: "Market Cap",
      price4: "2346B "
    }
  ];

  return (
    <div className="marquee bg-[#DFF0FF] p-2 mt-0 rounded-sm">
      <div className="marquee-content ">
        <div className='flex gap-12'>
        {data.map((item, index) => (
            <div key={index} className="marquee-item flex items-center">
            <img src={item.img} alt={item.text} className="marquee-image h-6 w-6" />
            <p className="marquee-text" style={{ color: item.color }}>{item.text}</p>
            <p className="marquee-text"><span className='font-semibold'>{item.text1}</span>: {item.price1}</p>
            <p className="marquee-text"><span className='font-semibold'>{item.text2}</span>: {item.price2}</p>
            <p className="marquee-text"><span className='font-semibold'>{item.text3}</span>: {item.price3}</p>
            <p className="marquee-text"><span className='font-semibold'>{item.text4}</span>: {item.price4}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;

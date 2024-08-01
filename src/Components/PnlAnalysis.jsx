import React from 'react';
import pnl from "../Assests/Pnl/pnl.svg";
import eye from "../Assests/Pnl/eye.svg";
import deposit from "../Assests/Pnl/deposit.svg";
import referral from '../Assests/Pnl/referral.svg';
import swap from "../Assests//Pnl/swap.svg";
import wallet from "../Assests/Pnl/wallet.svg";

const PnlAnalysis = () => {
    const data = [
        {
            img: deposit,
            title: "Deposit",
            color:"#F0E303"
        },
        {
            img: referral,
            title: "Referral",
            color:"#C5F1FF"
        },
        {
            img: swap,
            title: "Swap",
            color:"#FFD5C0"
        },
        {
            img: wallet,
            title: "Wallet",
            color:"#ECFAF0"
        },
    ];

    const data1 = [
        {
            text: "Today's PNL",
            percent: "-0.34%",
            price: "-$34.00",
            day: "7 days",
            color: "red",
            bgColor:"#FF000069"
        },
        {
            text: "7D PNL",
            percent: "+22.9%",
            price: "-$34.00",
            day: "30 days",
            color: "green",
            bgColor:"#D5F3DE"
        },
        {
            text: "30D PNL",
            percent: "-1.54%",
            price: "-$34.00",
            day: "Custom",
            color: "red",
            bgColor:"#FF000069"
        },
    ];

    return (
        <div className='p-2'>
            <div>
                <img src={pnl} alt="PNL" style={{margin:"auto"}}/>
            </div>
            <div>
                <h3 className='bg-[#F0E303] rounded-md h-8 font-semibold text-xl mt-2 text-center'>
                    PNL Analysis
                </h3>
                <div className='flex gap-2 mt-2 justify-center'>
                    <a
                        className="flex flex-row items-center justify-center p-1 rounded-full gap-2 bg-[#DFF0FF]"
                        href="#"
                    >
                        <span
                            className="rounded-full h-7 w-7 flex items-center justify-center bg-black"
                        >
                            <img src={eye} alt="label" className="w-4 h-4" />
                        </span>
                        <span className="text-xs font-semibold">
                            Total Value(ALZ)
                        </span>
                    </a>
                    <div className="relative inline-block text-left">
                        <div className="group">
                            <button
                                type="button"
                                className="rounded-full inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                            >
                                USD
                                <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                                </svg>
                            </button>
                            <div
                                className="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300"
                            >
                                <div className="py-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">INR</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">$</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4 text-center">
                    <h3 className="text-4xl font-bold">129,00.000</h3>
                    <p className='bg-[#DBDBDB] text-center py-1 w-full max-w-xs mx-auto rounded-full'>~$898,090.0000</p>
                </div>
                <div className="mb-4 grid grid-cols-4 gap-4 justify-items-center">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col items-center p-2 border rounded-full h-24 w-24" style={{backgroundColor:`${item.color}`}}>
                            <img src={item.img} alt={item.title} className="w-6 h-6 mb-2" />
                            <span className="text-lg">{item.title}</span>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {data1.map((item, index) => (
                        <div key={index} className="p-4 border rounded-lg" style={{backgroundColor:`${item.bgColor}`}}>
                            <h4 className="text-lg font-semibold">{item.text}</h4>
                            <p style={{color:`${item.color}`}} className='text-xl font-semibold'>{item.percent}</p>
                            <p className="text-gray-800" style={{color:`${item.color}`}}>{item.price}</p>
                            <p className="text-white bg-[#000] rounded-full w-24 mx-auto text-center">{item.day}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PnlAnalysis;

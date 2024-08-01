import React from 'react';
import www from "../Assests/Navbar/www.png";
import avatar from "../Assests/Navbar/avatar.svg";

const Navbar = () => {
  return (
    <div
      className="flex justify-between items-center p-4"
      style={{
        backgroundColor: "rgb(174,213,238)",
        background: "radial-gradient(circle, rgba(174,213,238,1) 0%, rgba(195,194,249,0) 100%)",
      }}
    >
      <h3 className="text-lg font-semibold">Overview</h3>
      <div className="flex items-center space-x-4">
        <img src={www} alt="www" className="w-8 h-8" />
        <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
        <div className='text-left'>
          <h4 className="text-sm font-medium">Welcome back, John</h4>
          <p className="text-xs text-gray-600">myemailaddress@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

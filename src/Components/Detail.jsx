import React from 'react';

const Detail = () => {

    const data = [
        {
            name: "username1",
            mobile: 7845814258,
            wallet: "1",
            date: "29/07/2023",
            status: "Active",
            color: "green"
        },
        {
            name: "username2",
            mobile: 7845814258,
            wallet: "5",
            date: "29/07/2023",
            status: "Active",
            color: "green"
        },
        {
            name: "username3",
            mobile: 7845814258,
            wallet: "2",
            date: "29/07/2023",
            status: "Inactive",
            color: "green"
        }
    ];

    return (
        <div>
            <div className='flex flex-row justify-between bg-[#FFFDD2] items-center p-4'>
                <h3 className='text-[#000] text-center text-2xl'>Registered Users</h3>
                <h3 className='text-white bg-[#000] w-44 h-8 rounded-full flex items-center justify-center'>Create Account +</h3>
            </div>
            <div className="mt-4">
                <table className="min-w-full text-left">
                    <thead >
                        <tr>
                            <th scope="col" className=" rounded-full text-sm bg-[#FFFDD2] text-black font-semibold px-6 py-4 text-center">
                                Name
                            </th>
                            <th scope="col" className=" rounded-full text-sm text-white bg-[#000] font-semibold px-6 py-4 text-center">
                                Mobile
                            </th>
                            <th scope="col" className=" rounded-full text-sm bg-[#FFFDD2] text-black font-semibold px-6 py-4 text-center">
                                Wallet
                            </th>
                            <th scope="col" className=" rounded-full text-sm bg-[#FFFDD2] text-black font-semibold px-6 py-4 text-center">
                                Date
                            </th>
                            <th scope="col" className=" rounded-full text-sm bg-[#FFFDD2] text-black font-semibold px-6 py-4 text-center">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, index) => (
                            <tr key={index} className="border-b bg-white text-center">
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.name}</td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.mobile}</td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.wallet}</td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.date}</td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <span className={`text-${user.color}-500`}>{user.status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Detail;

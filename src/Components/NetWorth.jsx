import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import 'tailwindcss/tailwind.css';

const AnalyticsCard = () => {
    useEffect(() => {
        const ctx = document.getElementById('analytics-card-01').getContext('2d');

        const formatThousands = (value) => {
            return Intl.NumberFormat('en-US', {
                maximumSignificantDigits: 3,
                notation: 'compact',
            }).format(value);
        };

        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(115, 176, 111, 0.49)');
        gradient.addColorStop(1, 'rgba(34, 196, 106, 0)');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [
                    '01-02', '02-02', '03-02', '04-02', '05-02', '06-02', '07-02', '08-02',
                    '09-02', '10-02', '11-02', '12-02',
                ],
                datasets: [
                    {
                        label: 'Current',
                        data: [
                            5000, 8700, 7500, 12000, 11000, 9500, 10500,
                            10000, 15000, 9000, 10000, 7000
                        ],
                        fill: true,
                        backgroundColor: gradient,
                        borderColor: '#2DA771',
                        borderWidth: 2,
                        tension: 0,
                        pointRadius: 0,
                        pointHoverRadius: 3,
                        pointBackgroundColor: '#2DA771',
                    },
                ],
            },
            options: {
                layout: {
                    padding: 20,
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            drawBorder: false,
                        },
                        ticks: {
                            callback: (value) => formatThousands(value),
                        },
                    },
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            autoSkipPadding: 48,
                            maxRotation: 0,
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        callbacks: {
                            title: () => false,
                            label: (context) => formatThousands(context.parsed.y),
                        },
                    },
                },
                interaction: {
                    intersect: false,
                    mode: 'nearest',
                },
                maintainAspectRatio: false,
            },
        });

        return () => chart.destroy();
    }, []);

    return (
        <div className="bg-white  rounded-lg border border-gray-200">
            <h3 className='bg-[#FFFDD2] text-[#000] text-center p-2 mb-4 text-2xl font-semibold'>
                Assets Net Worth
            </h3>
            <div className="flex flex-row items-center mb-4 justify-between p-4">
            <div >
                <p className='bg-[#000] text-white rounded-full w-44 h-26 flex items-center justify-center text-xl'>
                    +$123,90,90.98
                </p>
                <span className='mt-2 text-sm text-gray-600'>Last Updated: 02 hrs ago</span>
            </div>
            <div className="flex flex-row justify-between mb-4">
                <p className='bg-[#F7F07A] text-[#000] rounded-full w-14 h-10 flex items-center justify-center cursor-pointer'>1D</p>
                <p className='bg-[#000] text-white rounded-full w-14 h-10 flex items-center justify-center cursor-pointer mx-2'>1W</p>
                <p className='bg-[#F7F07A] text-[#000] rounded-full w-14 h-10 flex items-center justify-center cursor-pointer'>1M</p>
                <p className='bg-[#F7F07A] text-[#000] rounded-full w-14 h-10 flex items-center justify-center cursor-pointer'>1Y</p>
            </div>
            </div>
            <div className="relative">
                <div className="w-full h-80">
                    <canvas id="analytics-card-01" width="800" height="300"></canvas>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsCard;

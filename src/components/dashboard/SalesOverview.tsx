import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

import StatCard from './StatCard';

const data = [
    { name: 'Jan', value1: 35, value2: 28, value3: 10 },
    { name: 'Feb', value1: 5, value2: 28, value3: 10 },
    { name: 'Mar', value1: 15, value2: 8, value3: 5 },
    { name: 'Apr', value1: 15, value2: 25, value3: 10 },
    { name: 'May', value1: 10, value2: 2, value3: 8 },
    { name: 'Jun', value1: 36, value2: 48, value3: 8 },
    { name: 'Jul', value1: 24, value2: 36, value3: 18 },
    { name: 'Aug', value1: 24, value2: 6, value3: 18 },
    { name: 'Sep', value1: 36, value2: 34, value3: 8 },
];

const SalesOverview: React.FC = () => {
    return (
        <div className="bg-white p-4 rounded-3xl border border-[#E4E4E4] h-full flex flex-col">
            <div className="flex items-center justify-between mb-2">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Sales Overview</h2>
                    <p className="text-sm text-gray-400 mt-1">Showing overview Jan 2022 - Sep 2022</p>
                </div>
                <button className="px-6 py-2 border border-gray-200 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors">
                    View Transactions
                </button>
            </div>

            <div className="flex items-center gap-4 self-end mb-6 p-1 rounded-xl" role="group" aria-label="Select report period">
                <button className="px-4 py-1.5 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Show 1 week report">1 Week</button>
                <button className="px-4 py-1.5 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Show 1 month report">1 Month</button>
                <button className="px-4 py-1.5 text-sm font-bold text-gray-900 bg-[#F9FAFB] shadow-sm rounded-lg" aria-label="Show 1 year report" aria-current="true">1 Year</button>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 flex-1">
                {/* Chart Section */}
                <div className="flex-1 min-h-[250px] relative">
                    <div className="sr-only">
                        A bar chart showing sales overview from January to September 2022. Each month displays three data points representing different revenue streams.
                    </div>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F3F4F6" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#9CA3AF', fontSize: 12 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#9CA3AF', fontSize: 10 }}
                                tickFormatter={(value) => `${value}m`}
                            />
                            <Bar dataKey="value1" radius={[4, 4, 0, 0]} barSize={6}>
                                {data.map((_, index) => (
                                    <Cell key={`cell-1-${index}`} fill="#4F46E5" />
                                ))}
                            </Bar>
                            <Bar dataKey="value2" radius={[4, 4, 0, 0]} barSize={6}>
                                {data.map((_, index) => (
                                    <Cell key={`cell-2-${index}`} fill="#10B981" />
                                ))}
                            </Bar>
                            <Bar dataKey="value3" radius={[4, 4, 0, 0]} barSize={6}>
                                {data.map((_, index) => (
                                    <Cell key={`cell-3-${index}`} fill="#EF4444" />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Stats Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-[45%]">
                    <StatCard
                        label="Total Inflow"
                        value="₦120,000,000.00"
                        trend={2.5}
                        valueColor="text-[#4F46E5]"
                    />
                    <StatCard
                        label="MRR"
                        value="₦50,000,000.00"
                        trend={2.5}
                        valueColor="text-[#10B981]"
                    />
                    <StatCard
                        label="Commission Revenue"
                        value="₦200,000,000.00"
                        trend={0.5}
                        trendType="neutral"
                        valueColor="text-[#14B8A6]"
                    />
                    <StatCard
                        label="GMV"
                        value="₦100,000,000.00"
                        trend={0.5}
                        trendType="down"
                        valueColor="text-[#EF4444]"
                    />
                </div>
            </div>
        </div>
    );
};

export default SalesOverview;

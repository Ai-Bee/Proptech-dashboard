import React from 'react';
import one from '../../assets/svgs/one.svg'
import two from '../../assets/svgs/two.svg'
import else1 from '../../assets/svgs/else.svg'

interface StatCardProps {
    label: string;
    value: string;
    trend?: number;
    trendType?: 'up' | 'down' | 'neutral';
    className?: string;
    labelColor?: string;
    valueColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
    label,
    value,
    trend,
    trendType = 'up',
    className = '',
    valueColor = 'text-gray-900'
}) => {
    return (
        <div className={`bg-white p-3 rounded-2xl border border-gray-100 flex flex-col justify-between h-fit min-h-24 ${className}`}>
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <h3 className={`text-lg font-bold ${valueColor}`}>{value}</h3>

                </div>
                <div className='flex items-center gap-1'>
                    <span className={`text-sm font-medium `}>{label}</span>

                    {trend !== undefined && (
                        <div
                            className={`flex items-center gap-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded-full`}
                            aria-label={`${trend}% ${trendType === 'up' ? 'increase' : 'decrease'}`}
                        >
                            {trendType === 'up' ? <img src={one} className='w-4 h-4' alt='trend direction' aria-hidden="true" /> : trendType === 'neutral' ? <img src={else1} className='w-4 h-4' alt='trend direction' aria-hidden="true" /> : <img src={two} className='w-4 h-4' alt='trend direction ' aria-hidden="true" />}
                            <span className={` text-xs font-thin ${trendType === 'up' ? 'text-green-600' : trendType === 'neutral' ? 'text-[#14B8A6]' : 'text-red-600'
                                }`}>
                                {trend}%
                            </span>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default StatCard;

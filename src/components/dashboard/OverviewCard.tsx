import React from 'react';
import { ChevronRight } from 'lucide-react';

interface MetricsProps {
    label: string;
    value: string;
}

interface OverviewCardProps {
    title: string;
    icon: string;
    metrics: MetricsProps[];
    viewAllLink?: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
    title,
    icon,
    metrics,
    viewAllLink = "#",
}) => {
    return (
        <div className="bg-white rounded-3xl border border-[#E4E4E4] flex flex-col ">
            <div className="flex rounded-t-3xl p-3 items-center bg-[#F9FAFB] justify-between mb-8">
                <div className="flex items-center gap-3">
                    <img src={icon} alt={title} />
                    <h2 className="text-lg font-bold text-gray-900">{title}</h2>
                </div>
                <a
                    href={viewAllLink}
                    className="flex items-center gap-1 text-xs font-bold text-[#3B82F6] hover:underline"
                    aria-label={`View all ${title}`}
                >
                    View all <ChevronRight className="w-3 h-3" aria-hidden="true" />
                </a>
            </div>

            <div className="grid p-6 grid-cols-3 gap-4 mt-auto">
                {metrics.map((m, i) => (
                    <div key={i} className="flex flex-col gap-2">
                        <span className="text-xs font-medium text-gray-400">{m.label}</span>
                        <span className="text-2xl font-bold text-gray-900">{m.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OverviewCard;

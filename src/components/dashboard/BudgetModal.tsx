import React from 'react';
import { Settings2, TrendingUp, BarChart3 } from 'lucide-react';
import Modal from '../ui/Modal';
import calculator from '../../assets/svgs/Budgeting.svg'
import overlay from '../../assets/overlay.png';

interface BudgetModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BudgetFeature: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="flex gap-4 items-start py-4">
        <div className="p-2 bg-gray-50 rounded-lg">
            <Icon className="w-6 h-6 text-gray-600" />
        </div>
        <div>
            <h4 className="font-semibold text-gray-900 leading-tight mb-1">{title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
        </div>
    </div>
);

const BudgetModal: React.FC<BudgetModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
            <div className="flex flex-col">
                {/* Header Section with Dark Background and Calculator Icon */}
                <div className="bg-[#0A1F33] p-12 flex flex-col items-center justify-center relative overflow-hidden">
                    <img
                        src={overlay}
                        alt=""
                        className="absolute rounded-t-2xl top-10 left-8 right-4 bottom-0 object-cover object-top"
                    />
                    {/* Browser dots decoration */}
                    <div className="absolute top-4 left-4 flex gap-1.5 z-10">
                        <div className="w-2 h-2 rounded-full bg-gray-500/30" />
                        <div className="w-2 h-2 rounded-full bg-gray-500/30" />
                        <div className="w-2 h-2 rounded-full bg-gray-500/30" />
                    </div>

                    <div className="relative z-10">
                        <img src={calculator} alt="Calculator" className='w-20 h-20' />
                    </div>
                </div>

                {/* Features Section */}
                <div className="px-4 py-1 ">
                    <BudgetFeature
                        icon={Settings2}
                        title="Set up annual budgets by account category"
                        description="Allocate funds across income and expense lines with full visibility."
                    />
                    <BudgetFeature
                        icon={TrendingUp}
                        title="Track actuals vs budget in real time"
                        description="See how your community is performing against plan, month by month."
                    />
                    <BudgetFeature
                        icon={BarChart3}
                        title="Adjust figures and forecast with ease"
                        description="Edit amounts, apply percentage changes, or roll forward last year's data—all in one place."
                    />
                </div>

                {/* Footer Action */}
                <div className="px-8 pb-4">
                    <button
                        className="w-full bg-[#1A1A1A] text-white py-4 rounded-full font-semibold text-base hover:bg-black transition-colors"
                        onClick={onClose}
                    >
                        Create Budget
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default BudgetModal;

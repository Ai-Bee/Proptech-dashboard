import React, { useState } from 'react';
import company_logo from '../../assets/svgs/company_logo.svg';
import calendar from '../../assets/svgs/calendar.svg'
import BudgetModal from '../dashboard/BudgetModal';
import CalendarDrawer from '../ui/CalendarDrawer';
import marketplace from '../../assets/svgs/Marketplace.svg'
import budgeting from '../../assets/svgs/Budgeting.svg'
import wallet from '../../assets/svgs/wallet-2.svg'
import search from '../../assets/svgs/search-status.svg'


const Header: React.FC = () => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    return (
        <header className="bg-[#105B48] text-white px-6 py-3 md:px-14  flex items-center justify-between">
            <div className="flex items-center gap-2 ">
                <img src={company_logo} alt={'company logo'} />
                <span className="text-xl font-bold tracking-tight">Expert Listing</span>
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={() => setIsSearchModalOpen(true)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Search"
                >
                    <img src={budgeting} alt={'Budgeting icon'} />
                </button>
                <button
                    onClick={() => setIsCalendarOpen(true)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Open Calendar"
                >
                    <img src={calendar} alt={'Calendar Icon'} />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="History">
                    <img src={search} alt={'Search Icon'} />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Wallet">
                    <img src={wallet} alt={'Wallet Icon'} />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Store">
                    <img src={marketplace} alt={'Marketplace Icon'} />
                </button>

                <div className="ml-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#105B48] font-bold" aria-label="User profile: Ahmed">
                    D
                </div>
            </div>

            <CalendarDrawer
                isOpen={isCalendarOpen}
                onClose={() => setIsCalendarOpen(false)}
            />

            <BudgetModal
                isOpen={isSearchModalOpen}
                onClose={() => setIsSearchModalOpen(false)}
            />
        </header>
    );
};

export default Header;

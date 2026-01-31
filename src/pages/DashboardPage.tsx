import React from 'react';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';

import SalesOverview from '../components/dashboard/SalesOverview';
import OverviewCard from '../components/dashboard/OverviewCard';
import PropertyCard from '../components/dashboard/PropertyCard';
import home2 from '../assets/svgs/solar_home-linear.svg'
import messages from '../assets/svgs/messages-3.svg'
import profile from '../assets/svgs/Profile1.svg'


const DashboardPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#F9FAFB] flex flex-col">
            <Header />
            <Navbar />

            <main className="flex-1 p-6 md:py-8 max-w-[1600px] md:px-14 mx-auto w-full">
                <h1 className="text-2xl font-bold text-gray-900 mb-8">Welcome, Ahmed</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Left Section: Sales Overview (now contains StatCards) */}
                    <div className="lg:col-span-2">
                        <SalesOverview />
                    </div>

                    {/* Right Section: Overview Cards Stack */}
                    <div className="flex flex-col gap-6">
                        <OverviewCard
                            title="Listings Overview"
                            icon={home2}
                            metrics={[
                                { label: 'Total', value: '1.8k' },
                                { label: 'Active', value: '80' },
                                { label: 'Archived', value: '1k' },
                            ]}
                        />
                        <OverviewCard
                            title="Users Overview"
                            icon={profile}
                            metrics={[
                                { label: 'Total', value: '20.7k' },
                                { label: 'Riders', value: '8.5k' },
                                { label: 'Subscribers', value: '7.5k' },
                            ]}
                        />
                    </div>
                </div>

                {/* Property Listings Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative">
                    <PropertyCard
                        tag="MOST CLICKED"
                        title="Urban Prime Plaza Premiere"
                        image="/src/assets/modern_building_1.jpg"
                    />
                    <PropertyCard
                        tag="MOST WATCHLISTED"
                        title="Urban Prime Plaza Premiere"
                        image="/src/assets/modern_building_2.jpg"
                    />
                    <PropertyCard
                        tag="HOTTEST LISTING"
                        title="Urban Prime Plaza Premiere"
                        image="/src/assets/modern_building_3.jpg"
                    />

                    {/* Floating Chat Button as seen in screenshot */}
                    <button
                        className="absolute bottom-8 right-8 w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform hidden xl:flex"
                        aria-label="Open chat support"
                    >
                        <img src={messages} alt='Chat ico' aria-hidden="true" />
                    </button>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;

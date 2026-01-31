import React from 'react';
import article from '../../assets/svgs/Article.svg'
import profile from '../../assets/svgs/Profile1.svg'
import home from '../../assets/svgs/vector.svg'
import task from '../../assets/svgs/task-square.svg'
import scroll from '../../assets/svgs/Scroll.svg'
import toolbox from '../../assets/svgs/Toolbox.svg'

interface NavItemProps {
    icon: string;
    label: string;
    isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive }) => (
    <button
        className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all duration-200 ${isActive
            ? 'bg-[#E7F3EF] text-[#105B48] font-semibold'
            : 'text-gray-500 hover:bg-gray-50'
            }`}
        aria-current={isActive ? 'page' : undefined}
    >
        <img src={icon} alt={label} />
        <span className="text-sm">{label}</span>
    </button>
);

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white border-b border-gray-100 px-6 md:px-14 py-4 flex justify-between items-center gap-4 overflow-x-auto no-scrollbar">
            <NavItem icon={home} label="Dashboard" isActive />
            <NavItem icon={toolbox} label="Listings" />
            <NavItem icon={profile} label="Users" />
            <NavItem icon={article} label="Request" />
            <NavItem icon={scroll} label="Applications" />
            <NavItem icon={task} label="Tasks" />
        </nav>
    );
};

export default Navbar;

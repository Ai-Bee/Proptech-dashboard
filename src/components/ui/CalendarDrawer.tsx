import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

interface CalendarDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const CalendarDrawer: React.FC<CalendarDrawerProps> = ({ isOpen, onClose }) => {
    const [viewDate, setViewDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    if (!isOpen) return null;

    const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT'];
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const handlePrevMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
    };

    const handleDateClick = (date: Date) => {
        setSelectedDate(date);
    };

    const generateDays = () => {
        const year = viewDate.getFullYear();
        const month = viewDate.getMonth();
        const firstDayOfMonth = new Date(year, month, 1);
        const startDay = firstDayOfMonth.getDay();

        const days = [];
        const startDate = new Date(year, month, 1 - startDay);

        // We use 42 cells (6 weeks) to ensure consistency in height
        for (let i = 0; i < 42; i++) {
            const current = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i);
            const isCurrentMonth = current.getMonth() === month;
            const isSelected = selectedDate &&
                current.getDate() === selectedDate.getDate() &&
                current.getMonth() === selectedDate.getMonth() &&
                current.getFullYear() === selectedDate.getFullYear();

            let dayDisplay: string | number = current.getDate();
            if (current.getDate() === 1) {
                dayDisplay = `${months[current.getMonth()].substring(0, 3).toUpperCase()} 1`;
            }

            days.push({
                date: new Date(current), // Clone to avoid mutation issues
                dayDisplay,
                isCurrentMonth,
                isSelected
            });
        }
        return days;
    };

    const calendarDays = generateDays();

    return (
        <div
            className="fixed inset-0 z-50 flex justify-end"
            role="dialog"
            aria-modal="true"
            aria-label="Calendar Selection"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Drawer Content */}
            <div className="relative w-full max-w-md bg-[#121212] text-white h-screen flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={onClose}
                            className="p-1 hover:bg-white/10 rounded-full transition-colors"
                            aria-label="Go back"
                        >
                            <ArrowLeft className="w-6 h-6" aria-hidden="true" />
                        </button>
                        <h2 className="text-xl font-semibold">Calendar</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Close calendar"
                    >
                        <X className="w-6 h-6" aria-hidden="true" />
                    </button>
                </div>

                {/* Month Selector */}
                <div className="flex items-center justify-center gap-12 py-8">
                    <button
                        onClick={handlePrevMonth}
                        className="text-gray-400 hover:text-white transition-colors p-2"
                        aria-label="Previous month"
                    >
                        <ChevronLeft className="w-8 h-8 fill-current" aria-hidden="true" />
                    </button>
                    <h3 className="text-2xl font-bold min-w-[200px] text-center" aria-live="polite">
                        {months[viewDate.getMonth()]} {viewDate.getFullYear()}
                    </h3>
                    <button
                        onClick={handleNextMonth}
                        className="text-gray-400 hover:text-white transition-colors p-2"
                        aria-label="Next month"
                    >
                        <ChevronRight className="w-8 h-8 fill-current" aria-hidden="true" />
                    </button>
                </div>

                {/* Calendar Grid */}
                <div className="flex-1 px-4 pb-4 overflow-y-auto">
                    <div className="grid grid-cols-7 border-t border-l border-white/10" role="grid">
                        {weekdays.map(day => (
                            <div
                                key={day}
                                className="py-2 text-center text-[10px] font-medium text-gray-500 border-r border-b border-white/10 tracking-wider"
                                role="columnheader"
                                aria-label={day}
                            >
                                {day}
                            </div>
                        ))}
                        {calendarDays.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleDateClick(item.date)}
                                className={`aspect-[0.8] p-2 border-r border-b border-white/10 flex flex-col items-start relative cursor-pointer transition-colors hover:bg-white/5 text-left w-full ${item.isCurrentMonth ? 'text-white' : 'text-gray-600'
                                    }`}
                                role="gridcell"
                                aria-selected={item.isSelected ?? undefined}
                                aria-label={`${item.date.getDate()} ${months[item.date.getMonth()]} ${item.date.getFullYear()}`}
                            >
                                <span className="text-xs">{item.dayDisplay}</span>
                                {item.isSelected && (
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold shadow-lg shadow-blue-600/20" aria-hidden="true">
                                        {item.date.getDate()}
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarDrawer;

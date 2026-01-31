import React from 'react';

interface PropertyCardProps {
    image: string;
    tag: string;
    title: string;
    className?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ image, tag, title, className = '' }) => {
    return (
        <div className={`relative rounded-3xl overflow-hidden group h-[350px] cursor-pointer ${className}`}>
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">{tag}</span>
                <h3 className="text-xl font-bold">{title}</h3>

                <div className="flex items-center justify-center gap-1 mt-6" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/30'}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;

import React from 'react';

interface CardProps {
    title: string;
    content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-md m-4">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-base text-gray-700">{content}</p>
        </div>
    );
};

export default Card;

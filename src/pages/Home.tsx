import React from 'react';

const Home: React.FC = () => {
    return (
        <div 
            className="flex flex-col items-center justify-center h-screen bg-gray-100"
            style={{ padding: '10px', textAlign: 'center' }}
        >
            <h1 
                className="text-3xl font-bold text-gray-800"
                style={{ marginBottom: '10px' }}
            >
                Welcome to Gecia's Canteen
            </h1>
            {/* Add more content here */}
        </div>
    );
};

export default Home;

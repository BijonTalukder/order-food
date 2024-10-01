// Navbar.js

import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [userLocation, setUserLocation] = useState('Location'); // Default location

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white shadow-lg fixed w-full z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left Side: Cart Icon and Login/Logout */}
                    <div className="flex items-center space-x-4">
                        <a href="#" className="text-gray-600 hover:text-green-600 transition duration-200">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M3 9h18M3 15h18M3 21h18" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-green-600 transition duration-200">Login</a>
                        <a href="#" className="text-white bg-green-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-green-500 transition duration-200">Logout</a>
                    </div>

                    {/* Center: User Location */}
                    <div className="flex-grow text-center">
                        <span className="text-gray-600 font-medium">{userLocation}</span>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="flex flex-col px-4 pt-4 pb-2 space-y-2 bg-white border-b border-gray-200 shadow-lg">
                    <div className="flex items-center w-full">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
                        />
                    </div>
                    <a href="#" className="text-gray-600 hover:text-green-600 transition duration-200">Add to Cart</a>
                    <span className="block text-gray-600">{userLocation}</span>
                    <a href="#" className="text-gray-600 hover:text-green-600 transition duration-200">Login</a>
                    <a href="#" className="text-white bg-green-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-green-500 transition duration-200">Logout</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

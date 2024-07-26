import React, { useState } from 'react';
import logo from '@/assets/img.svg';
import showmore from '@/assets/showmore.svg';
import { Switch } from '../../component/switchcustom/Switch';

export const Nav = () => {
    const [visible, setVisible] = useState(false);

    const toggleDropdown = () => {
        setVisible(!visible);
    };

    return (
        <div className="bg-white dark:bg-background font-roboto">
            <div className="container mx-auto flex items-center justify-between py-[29px] px-[20px] ">
                <img src={logo} />

                <nav className="flex items-center space-x-8 text-accent-textNav font-[500] max-w-[1200px]">
                    <a href="#" className="hover:text-primary">Tapos</a>
                    <a href="#" className="hover:text-primary">Wallet</a>
                    <a href="#" className="hover:text-primary">Leaderboard</a>
                    <a href="#" className="hover:text-primary">Shop</a>

                    <div className="relative">
                        <button onClick={toggleDropdown} className="text-primary flex items-center">
                            More <span className="ml-1"><img src={showmore} alt="Show more" /></span>
                        </button>
                        {visible && (
                            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md border w-40">
                                <a href="#" className="block px-5 py-2 hover:bg-gray-100 rounded-md transition-colors">Nguyen Minh Tu</a>
                                <a href="#" className="block px-5 py-2 hover:bg-gray-100 rounded-md transition-colors">Item 2</a>
                                <a href="#" className="block px-5 py-2 hover:bg-gray-100 rounded-md transition-colors">Item 3</a>
                            </div>
                        )}
                    </div>
                </nav>
                <div className="flex items-center">
                    <Switch />
                </div>
            </div>
        </div>
    );
};

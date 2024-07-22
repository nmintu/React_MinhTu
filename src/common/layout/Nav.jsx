import React, { useState } from 'react';
import logo from '@/assets/img.svg'
import showmore from '@/assets/showmore.svg'
import { Switch } from '../../component/switchcustom/Switch'
export const Nav = () => {


    const [visible, setVisible] = useState(false);

    const toggleDropdown = () => {
        setVisible(!visible);
    };

    return (
        <div className="bg-white dark:bg-background font-roboto  ">
            <div className="container mx-[110px] flex items-center justify-between   py-[29px] ">
                <img src={logo} />

                <nav className="flex  items-center ml-[120px] space-x-8  text-accent-textNav font-[500]">
                    <a href="#" className="hover:text-primary">Tapos</a>
                    <a href="#" className="hover:text-primary">Wallet</a>
                    <a href="#" className="hover:text-primary">Leaderboard</a>
                    <a href="#" className="hover:text-primary">Shop</a>

                    <div className="relative">
                        <button onClick={toggleDropdown} className="text-primary flex items-center">
                            More <span className="ml-1"><img src={showmore} />
                            </span>
                        </button>
                        {visible && (
                            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md border  w-40 left-1">
                                <a href="#" className="block px-5 py-2 hover:bg-gray-100 rounded-md transition-colors">Nguyen Minh Tu</a>
                                <a href="#" className="block px-5 py-2 hover:bg-gray-100 rounded-md transition-colors">Item 2</a>
                                <a href="#" className="block px-5 py-2 hover:bg-gray-100 rounded-md transition-colors">Item 3</a>
                            </div>
                        )}
                    </div>
                </nav>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Switch />
                </div>
            </div>
        </div>


    )
}

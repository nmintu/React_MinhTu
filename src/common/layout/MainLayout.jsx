import React, { useState } from 'react';
import { Switch, Space } from 'antd';

function MainLayout() {
    const [checked, setChecked] = useState(false);

    const handleChange = (checked) => {
        setChecked(checked);
    };

    const [visible, setVisible] = useState(false);

    const toggleDropdown = () => {
        setVisible(!visible);
    };

    return (
        <div className="bg-white dark:bg-background border-b border-zinc-200 dark:border-border">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <svg width="53" height="40" viewBox="0 0 53 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43.2 0H16C14.2327 0 12.8 1.43269 12.8 3.2C12.8 4.96731 14.2327 6.4 16 6.4H43.2C44.9673 6.4 46.4 7.83269 46.4 9.6C46.4 11.3673 44.9673 12.8 43.2 12.8H35.2C31.6654 12.8 28.8 15.6654 28.8 19.2V36.8C28.8 38.5673 30.2327 40 32 40C33.7673 40 35.2 38.5673 35.2 36.8V22.4C35.2 20.6327 36.6327 19.2 38.4 19.2H43.2C48.5019 19.2 52.8 14.9019 52.8 9.6C52.8 4.29807 48.5019 0 43.2 0Z" fill="black" />
                    <path d="M16 12.8H3.2C1.43269 12.8 0 14.2327 0 16C0 17.7673 1.43269 19.2 3.2 19.2H12.8C14.5673 19.2 16 20.6327 16 22.4V32C16 33.7673 17.4327 35.2 19.2 35.2C20.9673 35.2 22.4 33.7673 22.4 32V19.2C22.4 15.6654 19.5346 12.8 16 12.8Z" fill="black" />
                </svg>

                <nav className="flex items-center space-x-6 text-zinc-700 dark:text-foreground">
                    <a href="#" className="hover:text-primary">Tapos</a>
                    <a href="#" className="hover:text-primary">Wallet</a>
                    <a href="#" className="hover:text-primary">Leaderboard</a>
                    <a href="#" className="hover:text-primary">Shop</a>

                    <div className="relative">
                        <button onClick={toggleDropdown} className="text-primary flex items-center">
                            More <span className="ml-1"><svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L7 7.5L13 1.5" stroke="#CA5C3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </span>
                        </button>
                        {visible && (
                            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md border border-gray-300 w-40 left-1">
                                <a href="#" className="block px-5 py-2 hover:bg-gray-100 rounded-md transition-colors">Nguyen Minh Tu</a>
                                <a href="#" className="block px-5 py-2 hover:bg-gray-100 rounded-md transition-colors">Item 2</a>
                                <a href="#" className="block px-5 py-2 hover:bg-gray-100 rounded-md transition-colors">Item 3</a>
                            </div>
                        )}
                    </div>
                </nav>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Space direction="vertical" className="py-2">
                        <Switch
                            checked={checked}
                            onChange={handleChange}
                            checkedChildren="Mainnet"
                            unCheckedChildren="Testnet"
                            style={{
                                backgroundColor: checked ? '#CA5C3B' : '#EEC5C7',
                            }}
                        />
                    </Space>
                </div>
            </div>
        </div>


    )
}
export default MainLayout
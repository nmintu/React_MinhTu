
import React, { useState } from 'react';

export const ButtonConnect = ({ text, className, textChanged, onConnect }) => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (!isClicked) {
            setIsClicked(true);
            onConnect();
        }
    };



    const buttonClass = isClicked
        ? 'bg-gray-100 text-gray-400 text-[16px] font-medium cursor-not-allowed'
        : 'bg-primary text-white';

    return (
        <button
            className={`w-[250px] h-[41px] mt-[16px] py-[8px] px-[32px] rounded-[100px] ${buttonClass} ${className} `}
            disabled={isClicked}
            onClick={handleClick} > {isClicked ? textChanged : text}
        </button>
    );
};
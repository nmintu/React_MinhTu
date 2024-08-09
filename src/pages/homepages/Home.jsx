import React, { useRef } from 'react';
import { AppButton } from '@/component/buttons/AppButton';
import footprint from '@/assets/footprint.svg'
import { NextButton, PreButton } from '../../component/buttons/ButtonSlick.jsx';
import MultipleSlick from '../../component/slick/MultipleSlick.jsx';
import { CardReferral } from '../../component/card/CardReferral.jsx';
import { TableFriends } from '../../component/table/TableFriends.jsx';
import { CardConnect } from '../../component/card/CardConnect.jsx';

export const Home = () => {
    const sliderRef = useRef(null)
    const handlePrevClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }

    };

    const handleNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }

    };
    return (
        <>
            <div className="flex flex-col items-center font-roboto w-full relative">
                <img src={footprint} className='absolute top-8 right-48 w-11 h-9 ' />
                <img src={footprint} className='absolute top-20 right-28 w-9 h-9 -rotate-45' />
                <img src={footprint} className='absolute top-40 right-20 w-11 h-9' />
                <img src={footprint} className='absolute top-48 right-5 w-11 h-9 -rotate-45' />

                {/* Card Connect Your account */}
                <CardConnect />

                {/* card Follow*/}
                <div className="flex gap-1 max-w-[1110px] w-full mx-auto  mt-5 mb-4  justify-end">
                    <PreButton onClick={handlePrevClick} />
                    <NextButton onClick={handleNextClick} />
                </div>
                <MultipleSlick ref={sliderRef} className={" w-[1177px] h-full"} />

                {/*Card Invited Friend*/}
                <CardReferral />

                {/*Table Invited Friend*/}
                <TableFriends />

            </div>
        </>

    );
}
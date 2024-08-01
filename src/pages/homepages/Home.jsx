import React, { useRef } from 'react';
import { AppButton } from '@/component/buttons/AppButton';
import footprint from '@/assets/footprint.svg'
import { NextButton, PreButton } from '../../component/buttons/ButtonSlick';
import { NavigationButtons } from '../../component/buttons/NavigationButtons';
import MultipleSlick from '../../component/slick/MultipleSlick';
import { CardReferral } from '../../component/card/CardReferral';

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
                <h1 className="text-[40px] mt-14 font-bold text-center">Social Tasks</h1>
                <p className="text-center text-[14px] leading-[22px] text-gray-light font-medium my-[16px]">Complete the Social Tasks to earn extra $Heart token</p>

                <div className="border-2 font-[Roboto]  border-secondary bg-white rounded-lg p-6 w-full max-w-[1100px] h-auto ">
                    <p className="font-semibold text-[24px]  ">Connect Your X account</p>
                    <p className="mt-[16px] text-accent-textGray font-[14px] ">You need to connect your X account to join Social Task</p>
                    <a href="#" className="text-accent-linkLearMore text-[14px]">
                        Learn more &gt;
                    </a>
                    <br />
                    <AppButton className="text-white w-[250px] h-[41px] mt-[16px] py-[8px] px-[32px] !rounded-[100px]" >
                        Connect your X account
                    </AppButton>
                </div>

                {/* Card Connect Your account */}
                <div className="flex gap-1 max-w-[1110px] w-full mx-auto  mt-5 mb-4  justify-end">
                    <PreButton onClick={handlePrevClick} />
                    <NextButton onClick={handleNextClick} />
                </div>

                {/* card Follow*/}
                <MultipleSlick ref={sliderRef} className={" w-[1177px] h-full"} />
                <CardReferral />


            </div>
        </>

    );
}
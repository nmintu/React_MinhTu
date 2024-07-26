import React, { useState } from 'react';
import { AppButton } from '@/component/buttons/AppButton';
import footprint from '@/assets/footprint.svg'
import next from '@/assets/next.svg'
import pre from '@/assets/pre.svg'
import { NavigationButtons } from '../../component/buttons/NavigationButtons';
import { CardFollow } from '../../component/cardfollows/CardFollow';
import twitter from '@/assets/twitter.svg'
import discord from '@/assets/discord.svg'
import clsx from 'clsx';
export const Home = () => {
    const [isConnected, setIsConnected] = useState(false);

    const handleConnect = () => {
        setIsConnected(true);
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
                <div className="flex space-x-2 w-[73.7%] mt-5 mb-4  justify-end">
                    <NavigationButtons image={pre} />
                    <NavigationButtons image={next} />


                </div>

                {/* card Follow*/}
                <div className="flex justify-between w-[1110px] h-[332px]">
                    <CardFollow className={"bg-black p-3"} img={twitter} text1={"Follow Tapos X"} text2={"Follow Tapos X to earn Points"}
                        isConnected={isConnected}
                    />
                    <CardFollow className={"bg-black p-3"} img={twitter} text1={"Retweet post on X"} text2={"Retweet Tapos post on X to earn Points"}
                        isConnected={isConnected}
                    />
                    <CardFollow className={" w-[70px] h-[60px]"} img={discord} text1={"Joint VibrantX Discord"} text2={"Retweet a daily tweet to earn HEART"}
                        isConnected={isConnected}
                    />
                </div>

            </div>
        </>

    );
}
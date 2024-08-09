import fishbone from '@/assets/fishbone.svg';
import footcat from '@/assets/footcat.svg';
import wool from '@/assets/wool.svg';
import heart from '@/assets/heart.svg';
import tick from '@/assets/tick.svg';

import { AppButton } from '@/component/buttons/AppButton';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { HomeAPI } from '../../services/ex';
export const CardFollow = ({ text1, text2, img, className, address, typeSocial }) => {
    const isFollowed = useSelector((state) => state.modal.isFollowed)
    const [joinChannelTelegram, setJoinChannelTelegram] = useState(false)
    const [joinVibxDiscord, setJoinVibxDiscord] = useState(false)
    const [joinTwitter, setJoinTwitter] = useState(false)
    const handleFollowed = async () => {
        try {
            const request = await HomeAPI.postVerifySocial({ address, typeSocial })
            if (request.success) {
                const social = await HomeAPI.getSocial({ address })

                setJoinChannelTelegram(social.msg.joinChannelTelegram)
                setJoinVibxDiscord(social.msg.joinVibxDiscord)
                setJoinTwitter(social.msg.joinTwitter)
                alert("Successfully")
            } else {
                alert("Failed")
            }

        } catch (e) {
            console.error(e);
        }
    }
    return (
        <div className={` rounded-[30px] border-secondary border-2 pl-[30px] pt-[30px] pb-[18px] flex flex-col justify-between relative
         overflow-hidden w-[320px] h-[276px]  ${joinChannelTelegram || joinVibxDiscord || joinTwitter ? 'bg-secondary' : "bg-white"}`}>
            <div className="flex items-center mt-[30px]">
                <img src={img} className={`absolute w-[62.54px] h-[60px] rounded-full   ${className} `} />
                <img src={footcat} className="absolute -right-3 -top-1 w-[82px] h-[64px]" />
                <img src={wool} className="absolute w-[64px] h-[65px] right-[59px] top-[13px]" />
                <img src={fishbone} className="absolute w-[46px] h-[37px] right-2 top-[68px]" />
            </div>
            <div className="mt-[41px]">
                <span className="mt-10 mr-[31px] w-[163px] h-[29px] text-[24px] font-bold">{text1}</span>
                <p className="text-[14px] font-medium">{text2}</p>
                <div className="flex items-center justify-between mt-6 mr-[31px] space-x-4">
                    <button className="inline-flex bg-accent-buttonHeart text-sm w-[100px] h-auto rounded-[24.85px] px-4 py-[10px]">+20
                        <img src={heart} />
                    </button>
                    {joinChannelTelegram || joinVibxDiscord || joinTwitter ? (
                        <img src={tick} alt="followed" />
                    ) : (
                        <AppButton className={`text-sm font-medium !rounded-[100px] w-[170px] h-auto px-8 py-2
    bg-white border ${isFollowed ? ' border-primary text-primary ' : ' border-neutral-300 text-neutral-300 '} `}
                            disabled={!isFollowed}
                            onClick={handleFollowed}
                        >Follow</AppButton>)}
                </div>
            </div>
        </div>
    );
};
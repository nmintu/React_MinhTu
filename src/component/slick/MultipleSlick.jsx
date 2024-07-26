import React, { forwardRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CardFollow } from '../../component/cardfollows/CardFollow';
import twitter from '@/assets/twitter.svg';
import discord from '@/assets/discord.svg';

const MultipleSlick = forwardRef((props, ref) => {
    const { className } = props;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };
    const slides = [
        {
            className: "bg-black p-3",
            img: twitter,
            text1: "Follow Tapos X",
            text2: "Follow Tapos X to earn Points"
        },
        {
            className: "bg-black p-3",
            img: twitter,
            text1: "Retweet post on X",
            text2: "Retweet Tapos post on X to earn Points"
        },
        {
            className: "w-[70px] h-[60px]",
            img: discord,
            text1: "Join VibrantX Discord",
            text2: "Retweet a daily tweet to earn HEART"
        },

    ]

    return (
        <div className={`${className}`}>
            <Slider ref={ref} {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}
                    ><CardFollow text1={slide.text1} text2={slide.text2} img={slide.img} className={slide.className} /></div>
                ))}
            </Slider>
        </div>
    );
});

export default MultipleSlick;

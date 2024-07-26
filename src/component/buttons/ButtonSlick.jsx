import React from 'react';
import { NavigationButtons } from "./NavigationButtons";
import next from '@/assets/next.svg';
import pre from '@/assets/pre.svg';

export const PreButton = ({ onClick }) => {
    return (
        <NavigationButtons
            image={pre}
            onClick={onClick}
        />
    );
};

export const NextButton = ({ onClick }) => {
    return (
        <NavigationButtons
            image={next}
            onClick={onClick}
        />
    );
};

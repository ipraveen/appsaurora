import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';
import * as style from './flip.module.css';

interface Props {
    value: string;
}

const FlipCard: React.FC<Props> = ({ value }) => {
    const styleFlip = style.flip;
    const baseCardRef = useRef(null);
    const flipCardRef = useRef(null);
    useEffect(() => {
        const flipCard = flipCardRef.current;
        const baseCard = baseCardRef.current;

        const animateCard = (card: Element) => {
            const cardTop = card.querySelector('.top') as Element;
            const cardBottom = card.querySelector('.bottom') as Element;

            const handleCardTopAnimationEnd = () => {
                cardBottom.textContent = String(value);
                cardTop.textContent = String(value);
            };

            const handleCardBottompAnimationEnd = () => {
                card.classList.remove(styleFlip);
            };

            cardTop.addEventListener('animationend', handleCardTopAnimationEnd);
            cardBottom.addEventListener('animationend', handleCardBottompAnimationEnd);

            card.classList.add(styleFlip);

            return () => {
                cardTop.removeEventListener('animationend', handleCardTopAnimationEnd);
                cardBottom.removeEventListener('animationend', handleCardBottompAnimationEnd);
            };
        };

        const setValue = (card: Element, value: string) => {
            const cardTop = card.querySelector('.top') as Element;
            const cardBottom = card.querySelector('.bottom') as Element;

            cardBottom.textContent = String(value);
            cardTop.textContent = String(value);
        };

        if (flipCard && baseCard) {
            setValue(baseCard, value);
            return animateCard(flipCard);
        }
    }, [value]);
    return (
        <div className="relative w-28 h-28 block">
            <Card className="absolute" ref={baseCardRef} zIndex="z-0" />
            <Card className="absolute" ref={flipCardRef} zIndex="z-100" />
        </div>
    );
};

export default FlipCard;

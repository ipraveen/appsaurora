import { Button } from 'components/core';
import FlipCard from 'components/core/flip-card/FlipCard';
import React, { useState } from 'react';
import { Word } from './types';
import { Paper } from 'components/core';

interface Props {
    word: Word;
    onNext: () => void;
    onPrev: () => void;
}

const WordCard = ({ word, onNext, onPrev }: Props) => {
    const { name, sentences, meanings } = word;

    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    };

    const handleNext = () => {
        setFlipped(false);
        onNext();
    };

    const handleShow = () => {
        setFlipped(true);
    };

    const cardCommonClassName = 'grid p-6 w-full h-full place-content-center';

    return (
        <div>
            <FlipCard
                flipped={flipped}
                onClick={handleClick}
                className="w-8/12 h-80 max-w-screen-md mx-auto"
                front={
                    <Paper className={cardCommonClassName}>
                        <h1 className="text-6xl text-theme-800 capitalize">{name}</h1>
                    </Paper>
                }
                back={
                    <Paper className={cardCommonClassName}>
                        <h1 className="text-4xl text-theme-800 capitalize">{name}</h1>
                        <ol className="list-inside my-4">
                            {meanings.map((meaning) => (
                                <li>
                                    <p className="leading-6 text-theme-700 text-lg">{meaning}</p>
                                </li>
                            ))}
                        </ol>

                        <ol className="ml-4 list-disc">
                            {sentences.map((sentence) => (
                                <li className="leading-6 text-theme-600 text-md">
                                    <i> {`${sentence}`}</i>
                                </li>
                            ))}
                        </ol>
                    </Paper>
                }
            />
            <div className="flex justify-center gap-6 items-center p-6 h-24">
                <Button disabled={flipped} color='success' onClick={handleShow}>Show</Button>
                <Button onClick={handleNext}>Next</Button>
            </div>
        </div>
    );
};

export default WordCard;

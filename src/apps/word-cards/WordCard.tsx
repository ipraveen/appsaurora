import { Button } from 'components/parts';
import FlipCard from 'components/parts/flip-card/FlipCard';
import React, { useState } from 'react';
import { Word } from './types';

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

    const handlePrev = () => {

        setFlipped(false);
        onNext();

    }

    return (
        <div>
            <FlipCard
                flipped={flipped}
                onClick={handleClick}
                className="w-8/12 h-80 max-w-screen-md mx-auto"
                front={
                    <div className="grid rounded-xl p-6 w-full h-full place-content-center border-2 border-gray-200 drop-shadow-sm">
                        <h1 className="text-6xl text-theme-800 capitalize">{name}</h1>
                    </div>
                }
                back={
                    <div className="grid  gap-3 rounded-xl p-6 w-full h-full place-content-center border-2 border-gray-200 drop-shadow-sm0">
                        <h1 className="text-3xl text-slate-700">{name}</h1>
                        <ol className="list-inside">
                            {meanings.map((meaning) => (
                                <li>
                                    <p className="leading-6 text-slate-900 text-lg">{meaning}</p>
                                </li>
                            ))}
                        </ol>

                        <ol className="ml-4">
                            {sentences.map((sentence) => (
                                <li className="leading-6 text-slate-500 text-md">
                                    <i> {`- ${sentence}`}</i>
                                </li>
                            ))}
                        </ol>
                    </div>
                }
            />
            <div className='flex justify-center gap-6 items-center p-6 h-24'> 
                {/* <Button className="px-8 text-xl" onClick={handlePrev}>
                    Prev
                </Button> */}

                <Button className="px-8 text-xl" onClick={handleNext}>
                    Next
                </Button>
            </div>
        </div>
    );
};

export default WordCard;

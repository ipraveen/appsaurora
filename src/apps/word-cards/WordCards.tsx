import React, { useEffect, useState } from 'react';
import fetchUtil from 'utils/fetchUtil';
import { parseWords } from './helpers';
import { Word } from './types';
import WordCard from './WordCard';
import { genRandomNumbers } from 'utils/numbers';

interface Props {}

const carIdx: number[] = [];

const WordCards = (props: Props) => {
    const [words, setWords] = useState<Word[]>([]);
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const load = async () => {
            // const url = 'https://raw.githubusercontent.com/ipraveen/common-data/master/words.md';
            const url = 'https://cdn.jsdelivr.net/gh/ipraveen/common-data/words.md';
            const data = await fetchUtil.getText(url);

            const wordsRes = parseWords(data);
            debugger;
            setWords(wordsRes);
            setLoading(false);
        };

        load();
    }, []);

    const handleNext = () => {
        const idx = genRandomNumbers(words.length);
        carIdx.push(idx);
        setIndex(idx);
    };

    const handlePrev = () => {
        const idx = carIdx.pop();
        if (idx != null) {
            setIndex(idx);
        }
    };

    if (loading) return null;
    return <WordCard onNext={handleNext} word={words[index]} onPrev={handlePrev} />;
};

export default WordCards;

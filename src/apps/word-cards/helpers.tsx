import { Word } from './types';

enum LINE_TYPES {
    WORD = '#',
    MEANING = '>',
    SENTENCE = '-',
    NOTES = '!',
}

export const parseWords = (data: string): Word[] => {
    const lines = data.split('\n');

    const words: Word[] = [];
    let word = {} as Word;
    lines.forEach((line) => {
        const lineType = line.trim()[0];
        const value = line.trim().substring(1).trim();

        switch (lineType) {
            case LINE_TYPES.WORD:
                if ('name' in word) {
                    words.push(word);
                }

                word = { name: value, meanings: [], sentences: [] };

                break;

            case LINE_TYPES.MEANING:
                word.meanings.push(value);
                break;

            case LINE_TYPES.SENTENCE:
                word.sentences.push(value);
                break;
            case LINE_TYPES.NOTES:
                word.note = value;
                break;

            default:
                break;
        }
    });

    return words;
};

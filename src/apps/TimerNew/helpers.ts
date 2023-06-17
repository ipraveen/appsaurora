export const formatTime = (time: number, type: string = 'min') => {
    const hrs = Math.floor(time / (60 * 60));
    const mins = Math.floor(time / 60);
    const sec = time % 60;

    const format = new Intl.NumberFormat('en-IN', { minimumIntegerDigits: 2, maximumFractionDigits: 0 }).format;

    const minsec = `${format(mins)}:${format(sec)}`;

    if (hrs > 0 || type === 'full') {
        return `${format(hrs)}:${minsec}`;
    }

    return minsec;
};
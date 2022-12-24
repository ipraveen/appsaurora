export const genRandomNumbers = (max = 100, min = 0) => {
    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer); // Replace it with crypto module in NodeJs
    const [randomNo] = randomBuffer; // No between 0 - 2^32
    const randomFraction = randomNo / (0xffffffff + 1);
    const randomNumber = Math.floor(randomFraction * (max - min)) + min;

    return randomNumber;
};

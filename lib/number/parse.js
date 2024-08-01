export default (number) => {
    const isNegative = number < 0;
    let numberString = String(number);

    if (isNegative) {
        numberString = numberString.slice(1);
    }

    const decimal = numberString.split('.');

    return {
        integer: decimal[0],
        fraction: decimal[1] || '',
        sign: isNegative ? '-' : ''
    };
};

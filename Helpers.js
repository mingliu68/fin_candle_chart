import Animated, { concat, cond, divide, eq, floor, lessThan, modulo, multiply, sub } from 'react-native-reanimated';

// argument value is Animated.Node in number
const formatInt = (value) => {
    const t = floor(divide(value / 1000))
    return cond(lessThan(t, 1), concat(t), concat(t, ",", modulo(value, 1000)));
}

// argument value is Animated.Node in number
export const format = (value) => {
    const int = floor(value);
    const dec = floor(multiply(sub(value, int), 100));
    const formattedDec = cond(
        eq(dec, 0),
        "00",
        cond(lessThan(dec, 10), concat("0", dec), concat(dec))
    );
    return concat("$", formatInt(int), ".", formattedDec);
};
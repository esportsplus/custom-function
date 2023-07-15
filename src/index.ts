let { setPrototypeOf } = Object;


const CustomFunction = function <T extends Function>(fn: T): T {
    return setPrototypeOf(fn, new.target.prototype);
};

CustomFunction.prototype = Function.prototype;


export default CustomFunction as {
    new(...args: Parameters<typeof CustomFunction>): typeof CustomFunction;
    (...args: Parameters<typeof CustomFunction>): typeof CustomFunction;
};
exports.min = function min(array) {
    if (!array || !array.length) return 0;
    return array.reduce((min, curr) => Math.min(min, curr));
};

exports.max = function max(array) {
    if (!array || !array.length) return 0;
    return array.reduce((max, curr) => Math.max(max, curr));
};

exports.avg = function avg(array) {
    if (!array || !array.length) return 0;
    return array.reduce((acc, curr) => acc + curr, 0) / array.length;
};

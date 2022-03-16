const bin = require("bin");

const { name, rule, safeMode, mobile } = bin;

const execute = function () {
    return safeMode(mobile);
};


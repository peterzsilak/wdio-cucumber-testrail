// this allows wdio.conf.main.js to use es6 imports
require("@babel/register")({
    presets: ["@babel/env"],
});
module.exports = require("./wdio.conf.main");
const path = require('path');

module.exports = {
    entry: {
        'main': './test.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].min.js',
        library: 'test'
    },
    performance: { hints: false }
};

const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './entry.js',
    output: {
        filename: 'output.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'from',
                to: 'to'
            }
        ])
    ]
};
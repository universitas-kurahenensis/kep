const path = require('path');
const WebpackUserscript = require('webpack-userscript');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new WebpackUserscript({
            headers({ name, version, author, description }) {
                return {
                    name: name,
                    version: version,
                    author: author,
                    description: description,
                    match: "*://karachan.org/*",
                    license: "WTFPL"
                };
            }
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};
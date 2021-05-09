const path = require('path')
const WebpackUserscript = require('webpack-userscript')
const dev = process.env.NODE_ENV === 'development'

module.exports = {
    mode: dev ? 'development' : 'production',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '<project-name>.user.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    plugins: [
        new WebpackUserscript({
            headers({ name, version, author, description }) {
                return {
                    name: name,
                    version: version,
                    author: author,
                    description: description,
                    match: "*://karachan.org/*"
                };
            }
        })
    ]
}
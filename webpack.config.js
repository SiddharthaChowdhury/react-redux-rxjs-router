var path    = require('path');
var hwp     = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/app/index.tsx'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module:{
        rules:[
            {
                test: /\.(tsx|ts)?$/,
                loaders: ['babel-loader', 'awesome-typescript-loader'],
                exclude: /node_modules/
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader" 
            }
        ]
    },
    plugins:[
        new hwp({template:path.join(__dirname, '/app/index.html')})
    ]
}
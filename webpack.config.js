const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require("path");

module.exports = {
    entry: { 
        main: "./src/index.ts",
        vendor: "./src/vendor.ts"
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
   
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                use: 'ts-loader',
                exclude: path.resolve(__dirname, "node_modules"),
            },
            
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(svg|png|gif|jpg|cur)$/,
                use: {
                    loader: "file-loader",
                    options: { 
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs" 
                    }
                },
            },
        ],
    },
}
module.exports = {
    entry: "./client/index/index.js",
    output: {
        path: "./bundle/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
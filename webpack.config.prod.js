import path from "path";
import glob from "glob";
import webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import ProgressBarPlugin from "progress-bar-webpack-plugin";

const GLOBALS = {
    "process.env.NODE_ENV": JSON.stringify("production"),
    __DEV__: false
};

// directories
const NODE_DIR = path.join(__dirname, "node_modules");
const CLIENT_ROOT = path.join(__dirname, "client");
const COMMON_DIR = path.join(__dirname, "common");
const STATIC_ROOT = path.join(CLIENT_ROOT, "src");
const INITIALIZERS_DIR = path.join(STATIC_ROOT, "initializers");
const DIST_DIR = path.join(CLIENT_ROOT, "dist");

const entries = glob
    .sync(path.join(INITIALIZERS_DIR, "*.js"))
    .reduce((obj, filePath) => {
        const parts = path.parse(filePath);
        return {
            ...obj,
            ...{
                [parts.name]: filePath
            }
        };
    }, {});

module.exports = {
    mode: "production",
    context: STATIC_ROOT,
    resolve: {
        modules: [
            STATIC_ROOT,
            NODE_DIR
        ],
        alias: {
            common: COMMON_DIR,
            node_modules: NODE_DIR
        }
    },
    entry: entries,
    target: "web",
    output: {
        path: DIST_DIR,
        filename: "[name].min.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: STATIC_ROOT,
            exclude: [ DIST_DIR, NODE_DIR ],
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    "css-loader"
                ]
            })
        }, {
            test: /\.eot(\?v=\d+.\d+.\d+)?$/,
            use: {
                loader: "file-loader"
            }
        }, {
            test: /\.(woff|woff2)(\?v=\d+.\d+.\d+)?$/,
            use: {
                loader: "file-loader?prefix=font/&limit=5000"
            }
        }, {
            test: /\.ttf(\?v=\d+.\d+.\d+)?$/,
            use: {
                loader: "file-loader?limit=10000&mimetype=application/octet-stream"
            }
        }, {
            test: /\.svg(\?v=\d+.\d+.\d+)?$/,
            use: {
                loader: "file-loader?limit=10000&mimetype=image/svg+xml"
            }
        }, {
            test: /\.(jpe?g|png|gif)$/i,
            use: {
                loader: "file-loader",
                options: {
                    publicPath: '/static/'
                }
            }
        }, {
            test: /\.ico$/,
            use: {
                loader: "file-loader?name=[name].[ext]"
            }
        }]
    },
    plugins: [
        new webpack.DefinePlugin(GLOBALS),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin("[name].css"), // relative to output.path
        new webpack.ProvidePlugin({
            "fetch": "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
        }),
        new ProgressBarPlugin()
    ]
};

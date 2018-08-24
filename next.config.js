const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssLoaderConfig = require('@zeit/next-css/css-loader-config');
const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config');
const withSass = require('@zeit/next-sass');

module.exports = withSass();

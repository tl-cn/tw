module.exports = {
    publicPath: './',
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = '打字练习';
            return args;
        })
    }
}
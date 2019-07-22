const {
    override,
    fixBabelImports,
    // addLessLoader
} = require('customize-cra')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: "es",
        style: 'css',
        // style: true
    }),
    // 如果使用less
    // addLessLoader({
    //     javascriptEnabled: true
    // })
)
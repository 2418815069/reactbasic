const {
    override,
    fixBabelImports,
    addLessLoader
} = require('customize-cra')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: "es",
        // style: 'css',
        style: true
    }),
    // 如果使用less-loader对源码中对less进行覆盖
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#1DA57A'
        },
    })
)
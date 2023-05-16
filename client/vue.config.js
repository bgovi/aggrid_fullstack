module.exports = {

    pages: {
        index: {
        entry: './src/pages/index/main.js',
        template: 'public/index.html',
        title: 'index page',
        chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        admin: {
        entry: './src/pages/admin/main.js',
        template: 'public/index.html',
        title: 'admin page',
        chunks: ['chunk-vendors', 'chunk-common', 'admin']
        },
        hello: {
            entry: './src/pages/hello/main.js',
            template: 'public/index.html',
            title: 'admin page',
            chunks: ['chunk-vendors', 'chunk-common', 'hello']
        }
    }
    //devServer and devServer.proxy
    //nodemon for server

}
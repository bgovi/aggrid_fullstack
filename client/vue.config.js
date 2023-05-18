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
        grid: {
            entry: './src/pages/grid/main.js',
            template: 'public/index.html',
            title: 'grid page',
            chunks: ['chunk-vendors', 'chunk-common', 'grid']
        },
        build: {
            entry: './src/pages/build/main.js',
            template: 'public/index.html',
            title: 'build page',
            chunks: ['chunk-vendors', 'chunk-common', 'build']
        },
        batch_file: {
            entry: './src/pages/batch_file/main.js',
            template: 'public/index.html',
            title: 'build page',
            chunks: ['chunk-vendors', 'chunk-common', 'batch_file']
        },
        survey: {
            entry: './src/pages/survey/main.js',
            template: 'public/index.html',
            title: 'build page',
            chunks: ['chunk-vendors', 'chunk-common', 'survey']
        },
        download: {
            entry: './src/pages/download/main.js',
            template: 'public/index.html',
            title: 'build page',
            chunks: ['chunk-vendors', 'chunk-common', 'download']
        }
    }
    //devServer and devServer.proxy
    //nodemon for server

}
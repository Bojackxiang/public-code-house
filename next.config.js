// to help the nextjs project to load css file 

const withCss = require('@zeit/next-css')

if (typeof require !== 'undefined'){
    require.extensions['.css'] = file => {}
}

module.exports = withCss({}) 
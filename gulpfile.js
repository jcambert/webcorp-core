require('')(require('gulp'), {
    pkg: require('./package.json'),
    baseDir: __dirname,
    testDepedencyFiles: [
        
    ],
    sourceFiles: [],
    componentPrefix: 'component.prefix',
    componentSuffix: 'component.suffix'
});
import uglify from 'rollup-plugin-uglify-es';


export default [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/grph.min.js',
            format: 'iife',
            name: 'Grph'
        },
        plugins: [
            uglify(),
        ]
    },
    {
        input: 'src/bar-export.js',
        output: {
            file: 'dist/grph.bar.min.js',
            format: 'iife',
            name: 'Grph'
        },
        plugins: [
            uglify(),
        ]
    },
    {
        input: 'src/pie-export.js',
        output: {
            file: 'dist/grph.pie.min.js',
            format: 'iife',
            name: 'Grph'
        },
        plugins: [
            uglify(),
        ]
    }          
]
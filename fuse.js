const { FuseBox, CSSPlugin, SassPlugin, WebIndexPlugin } = require("fuse-box");
const TypeHelper = require('fuse-box-typechecker').TypeHelper;
const yargs = require('yargs');
const args = yargs.argv;

//create type chacker, it will display paths its using now
const typeHelper = TypeHelper({
    tsConfig: './tsconfig.json',
    basePath:'./',
    name: 'App typechecker'
})

const fuse = FuseBox.init({
    homeDir: "./src",
    output: "./$name.js",
    sourceMaps: true,
    hash: args.production,
    plugins: [
        [SassPlugin(),
        CSSPlugin()],
        
        WebIndexPlugin({
            template: "./src/index.html",
            path: "/"
        })
    ]
});

if(!args.production){
    fuse.bundle("app")
    .target('browser')
    .sourceMaps(true)
    .instructions(`>app.tsx`)
    .hmr()
    .watch("**")
    .completed(proc => {
        console.log(`\x1b[36m%s\x1b[0m`, `client bundled`);
        // run the type checking
        typeHelper.runSync();
    });
    
    fuse.dev({
        root: '/dist/js'
    });
}
else{
    fuse.bundle("app")
        .target('browser')
        .instructions(`>app.tsx`);
}

fuse.run();
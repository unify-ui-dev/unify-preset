import { resolve } from 'path'
import { defineBuildConfig } from 'unbuild'




export default defineBuildConfig({
    entries: ['src/index'],
    declaration: true,
    clean: true,
    rollup: {
        emitCJS: true,
        alias: {
            entries: {
                "@/types": resolve(__dirname, './src/types'),
                "@/utils":resolve(__dirname, './src/utils/')
            }
        }
    },

    failOnWarn: false,

    externals: ['unocss', "@unifyui/unify-variant"],
})
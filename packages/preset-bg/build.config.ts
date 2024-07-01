import { resolve } from 'node:path'
import { defineBuildConfig } from 'unbuild'


export default defineBuildConfig({
    entries: ['src/index'],
    declaration: true,
    clean: true,
    rollup: {
        emitCJS: true,
        alias: {
            entries: {
                "@/types": resolve(__dirname, './src/types/'),
                "@/utils": resolve(__dirname, './src/utils/')
            },
        },
        dts: {
            compilerOptions: {
                baseUrl: "./",
                paths: {
                    "@/*": ["src/*"]
                }
            }
        }
    },

    failOnWarn: false,
    externals: ['unocss', "@unifydev/unify-variant", '@unocss/preset-mini/utils', '@unocss/rule-utils', '@unocss/core'],
})
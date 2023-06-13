import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
    plugins: [
        AutoImport({
            imports: ['vue', 'vue-router'],

            dirs: ['./composables'],

            vueTemplate: true,
        }),
        Components({
            dirs: [
                './src/components'
            ],

            dts: true,

            directoryAsNamespace: true,
        }),
    ],

    resolve: {
        alias: {
            '~': fileURLToPath(new URL('./', import.meta.url)),
        },
    },
});

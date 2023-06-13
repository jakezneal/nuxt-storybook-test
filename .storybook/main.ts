import { resolve } from 'path';
import { loadConfigFromFile, mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
    stories: [
        resolve(__dirname, '../src/components/**/*.stories.@(js|jsx|ts|tsx)'),
    ],

    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],

    staticDirs: ['../src/static'],

    framework: {
        name: "@storybook/vue3-vite",
        options: {},
    },

    async viteFinal(config) {
        const { config: userConfig }: any = await loadConfigFromFile(
            resolve(__dirname, '../vite.config.ts') as any
        );

        return mergeConfig(config, userConfig);
    }
};

export default config;

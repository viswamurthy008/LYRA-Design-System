import type { StorybookConfig } from '@storybook/react-vite';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // Tailwind v4 runs as a Vite plugin so utility classes in the components
  // (e.g. `bg-blue-800`, `w-[70px]`) are compiled on the fly.
  async viteFinal(viteConfig) {
    viteConfig.plugins = viteConfig.plugins ?? [];
    viteConfig.plugins.push(tailwindcss());
    const { mergeConfig } = await import('vite');
    return mergeConfig(viteConfig, {
      resolve: {
        // The MDX loader injects the docs JSX shim as a file:/// URL, which
        // Rollup can't resolve on Windows — strip the scheme back to a path.
        alias: [{ find: /^file:\/\/\//, replacement: '' }],
      },
    });
  },
};

export default config;

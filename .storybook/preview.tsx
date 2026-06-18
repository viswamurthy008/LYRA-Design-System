import type { Preview, Decorator } from '@storybook/react-vite';

// Global stylesheets:
//  - tokens.css  → design tokens (light + dark) as CSS custom properties
//  - tailwind.css → Tailwind entry (kept for any utility usage in stories)
import '../src/styles/tokens.css';
import './tailwind.css';

// Theme toolbar (light / dark)
export const globalTypes = {
  theme: {
    description: 'Color theme',
    defaultValue: 'light',
    toolbar: {
      title: 'Theme',
      icon: 'paintbrush',
      items: [
        { value: 'light', title: 'Light', icon: 'sun' },
        { value: 'dark', title: 'Dark', icon: 'moon' },
      ],
      dynamicTitle: true,
    },
  },
};

const withTheme: Decorator = (Story, context) => {
  const theme = (context.globals.theme as string) || 'light';
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
    // Reflect the theme on the canvas so previews read correctly.
    document.body.style.background = 'var(--color-bg-default)';
    document.body.style.color = 'var(--color-text-default)';
    document.body.style.transition = 'background 120ms ease';
  }
  return <Story />;
};

const preview: Preview = {
  decorators: [withTheme],
  // Auto-generate a "Docs" page (props table + examples) for every component.
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
};

export default preview;

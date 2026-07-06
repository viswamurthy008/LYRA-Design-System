import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { Icon } from '../Icon/Icon';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Actions/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Primary action trigger. Mirrors the Figma "Button" component set. Styled with plain CSS + design tokens (tokens.css).',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost'],
      description: 'Visual style — maps to the Figma "Style" variant',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size — maps to the Figma "Size" variant',
      table: { defaultValue: { summary: 'md' } },
    },
    children: { control: 'text' },
    className: { control: false },
  },
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Ghost: Story = {
  args: { variant: 'ghost' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

/** All variants and sizes laid out for visual reference */
export const Showcase: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {(['primary', 'secondary', 'ghost'] as const).map((v) => (
        <Button key={v} {...args} variant={v}>
          {v}
        </Button>
      ))}
    </div>
  ),
};

export const Loading: Story = { args: { children: 'Saving…', loading: true } };
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button iconLeft={<Icon name="plus" size={16} />}>Add item</Button>
      <Button variant="secondary" iconRight={<Icon name="arrow-right" size={16} />}>
        Continue
      </Button>
    </div>
  ),
};

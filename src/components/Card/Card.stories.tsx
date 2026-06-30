import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
  argTypes: { variant: { control: 'inline-radio', options: ['default', 'elevated'] } },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: 'default',
    title: 'Card Title',
    body: 'A short description providing context about this card.',
    ctaLabel: 'Learn more',
  },
};
export const Elevated: Story = { args: { ...Default.args, variant: 'elevated' } };

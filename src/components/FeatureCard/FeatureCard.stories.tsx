import type { Meta, StoryObj } from '@storybook/react-vite';
import { FeatureCard } from './FeatureCard';

const meta: Meta<typeof FeatureCard> = {
  title: 'Data Display/FeatureCard',
  component: FeatureCard,
};
export default meta;
type Story = StoryObj<typeof FeatureCard>;

export const Default: Story = {
  args: {
    icon: <span aria-hidden>★</span>,
    title: 'Fast & flexible',
    description: 'Build screens quickly with token-driven components that adapt to your brand.',
  },
};

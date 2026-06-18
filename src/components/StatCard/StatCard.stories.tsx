import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatCard } from './StatCard';

const meta: Meta<typeof StatCard> = { title: 'Data Display/StatCard', component: StatCard };
export default meta;
type Story = StoryObj<typeof StatCard>;

export const Up: Story = {
  args: {
    label: 'Total Revenue',
    value: '$48,250',
    delta: '12.5%',
    deltaType: 'up',
    helper: 'vs last month',
  },
};
export const Down: Story = {
  args: {
    label: 'Churn',
    value: '2.1%',
    delta: '0.4%',
    deltaType: 'down',
    helper: 'vs last month',
  },
};

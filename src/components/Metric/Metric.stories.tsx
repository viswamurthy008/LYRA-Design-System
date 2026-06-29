import type { Meta, StoryObj } from '@storybook/react-vite';
import { Metric } from './Metric';

const meta: Meta<typeof Metric> = { title: 'Data Display/Metric', component: Metric };
export default meta;
type Story = StoryObj<typeof Metric>;

export const Up: Story = {
  args: { label: 'Revenue', value: '$48.2k', delta: 12.5, sparkline: [4, 6, 5, 8, 7, 11, 9, 13] },
};
export const Down: Story = {
  args: { label: 'Churn', value: '2.4%', delta: -3.1, sparkline: [9, 8, 8, 6, 7, 5, 4, 3] },
};

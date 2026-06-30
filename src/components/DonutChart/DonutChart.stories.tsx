import type { Meta, StoryObj } from '@storybook/react-vite';
import { DonutChart } from './DonutChart';

const meta: Meta<typeof DonutChart> = { title: 'Charts/DonutChart', component: DonutChart };
export default meta;
type Story = StoryObj<typeof DonutChart>;

const data = [
  { label: 'Direct', value: 45 },
  { label: 'Referral', value: 25 },
  { label: 'Social', value: 18 },
  { label: 'Email', value: 12 },
];

export const Donut: Story = { render: () => <DonutChart data={data} /> };
export const Pie: Story = { render: () => <DonutChart data={data} pie /> };

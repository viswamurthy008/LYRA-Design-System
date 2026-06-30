import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart } from './BarChart';

const meta: Meta<typeof BarChart> = { title: 'Charts/BarChart', component: BarChart };
export default meta;
type Story = StoryObj<typeof BarChart>;

const labels = ['Q1', 'Q2', 'Q3', 'Q4'];
const series = [
  { name: '2025', values: [24, 31, 28, 40] },
  { name: '2026', values: [30, 38, 35, 52] },
];

export const Grouped: Story = {
  render: () => (
    <div style={{ width: 480 }}>
      <BarChart labels={labels} series={series} />
    </div>
  ),
};
export const Stacked: Story = {
  render: () => (
    <div style={{ width: 480 }}>
      <BarChart labels={labels} series={series} stacked />
    </div>
  ),
};

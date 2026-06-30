import type { Meta, StoryObj } from '@storybook/react-vite';
import { AreaChart } from './AreaChart';

const meta: Meta<typeof AreaChart> = { title: 'Charts/AreaChart', component: AreaChart };
export default meta;
type Story = StoryObj<typeof AreaChart>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 480 }}>
      <AreaChart
        labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
        series={[{ name: 'Sessions', values: [120, 180, 150, 220, 200, 260, 240] }]}
      />
    </div>
  ),
};

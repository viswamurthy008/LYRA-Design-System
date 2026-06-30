import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart } from './LineChart';

const meta: Meta<typeof LineChart> = { title: 'Charts/LineChart', component: LineChart };
export default meta;
type Story = StoryObj<typeof LineChart>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 480 }}>
      <LineChart
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        series={[
          { name: 'Revenue', values: [12, 19, 15, 27, 24, 33] },
          { name: 'Costs', values: [8, 11, 9, 14, 13, 18] },
        ]}
      />
    </div>
  ),
};

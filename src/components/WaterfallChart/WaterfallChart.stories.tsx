import type { Meta, StoryObj } from '@storybook/react-vite';
import { WaterfallChart } from './WaterfallChart';

const meta: Meta<typeof WaterfallChart> = {
  title: 'Charts/WaterfallChart',
  component: WaterfallChart,
};
export default meta;
type Story = StoryObj<typeof WaterfallChart>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 520 }}>
      <WaterfallChart
        steps={[
          { label: 'Start', value: 100 },
          { label: 'Sales', value: 60 },
          { label: 'Refunds', value: -25 },
          { label: 'Fees', value: -15 },
          { label: 'Other', value: 30 },
        ]}
      />
    </div>
  ),
};

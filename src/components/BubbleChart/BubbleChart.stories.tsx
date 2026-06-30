import type { Meta, StoryObj } from '@storybook/react-vite';
import { BubbleChart } from './BubbleChart';

const meta: Meta<typeof BubbleChart> = { title: 'Charts/BubbleChart', component: BubbleChart };
export default meta;
type Story = StoryObj<typeof BubbleChart>;

const mk = (n: number) =>
  Array.from({ length: n }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 100 + 10,
  }));

export const Default: Story = {
  render: () => (
    <div style={{ width: 480 }}>
      <BubbleChart
        series={[
          { name: 'Markets', points: mk(10) },
          { name: 'Segments', points: mk(10) },
        ]}
      />
    </div>
  ),
};

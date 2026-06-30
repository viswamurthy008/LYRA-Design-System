import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScatterPlot } from './ScatterPlot';

const meta: Meta<typeof ScatterPlot> = { title: 'Charts/ScatterPlot', component: ScatterPlot };
export default meta;
type Story = StoryObj<typeof ScatterPlot>;

const rnd = (n: number, max: number) =>
  Array.from({ length: n }).map(() => ({ x: Math.random() * max, y: Math.random() * max }));

export const Default: Story = {
  render: () => (
    <div style={{ width: 480 }}>
      <ScatterPlot
        series={[
          { name: 'Group A', points: rnd(24, 100) },
          { name: 'Group B', points: rnd(24, 100) },
        ]}
      />
    </div>
  ),
};

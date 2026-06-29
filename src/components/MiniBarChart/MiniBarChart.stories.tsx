import type { Meta, StoryObj } from '@storybook/react-vite';
import { MiniBarChart } from './MiniBarChart';

const meta: Meta<typeof MiniBarChart> = { title: 'Charts/MiniBarChart', component: MiniBarChart };
export default meta;
type Story = StoryObj<typeof MiniBarChart>;

const data = [12, 18, 9, 22, 16, 27, 20, 31];

export const Default: Story = {
  render: () => (
    <div style={{ width: 220 }}>
      <MiniBarChart data={data} highlightIndex={data.length - 1} />
    </div>
  ),
};

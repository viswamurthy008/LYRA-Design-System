import type { Meta, StoryObj } from '@storybook/react-vite';
import { Treemap } from './Treemap';

const meta: Meta<typeof Treemap> = { title: 'Charts/Treemap', component: Treemap };
export default meta;
type Story = StoryObj<typeof Treemap>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 480 }}>
      <Treemap
        data={[
          { label: 'Compute', value: 420 },
          { label: 'Storage', value: 260 },
          { label: 'Network', value: 180 },
          { label: 'Database', value: 150 },
          { label: 'CDN', value: 90 },
          { label: 'Other', value: 60 },
        ]}
      />
    </div>
  ),
};

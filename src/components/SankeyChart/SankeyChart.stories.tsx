import type { Meta, StoryObj } from '@storybook/react-vite';
import { SankeyChart } from './SankeyChart';

const meta: Meta<typeof SankeyChart> = { title: 'Charts/SankeyChart', component: SankeyChart };
export default meta;
type Story = StoryObj<typeof SankeyChart>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 540 }}>
      <SankeyChart
        nodes={[
          { id: 'visit', label: 'Visits' },
          { id: 'signup', label: 'Sign-ups' },
          { id: 'bounce', label: 'Bounced' },
          { id: 'paid', label: 'Paid' },
          { id: 'free', label: 'Free' },
        ]}
        links={[
          { source: 'visit', target: 'signup', value: 60 },
          { source: 'visit', target: 'bounce', value: 40 },
          { source: 'signup', target: 'paid', value: 25 },
          { source: 'signup', target: 'free', value: 35 },
        ]}
      />
    </div>
  ),
};

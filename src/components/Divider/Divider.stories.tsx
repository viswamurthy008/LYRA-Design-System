import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = { title: 'Data Display/Divider', component: Divider };
export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: 280 }}>
      <Divider />
    </div>
  ),
};
export const Vertical: Story = {
  render: () => (
    <div style={{ height: 60, display: 'flex' }}>
      <Divider orientation="vertical" />
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const meta: Meta<typeof Tooltip> = { title: 'Feedback/Tooltip', component: Tooltip };
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  render: () => (
    <div style={{ padding: 48 }}>
      <Tooltip content="Helpful hint" position="top">
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
};
export const Bottom: Story = {
  render: () => (
    <div style={{ padding: 48 }}>
      <Tooltip content="Helpful hint" position="bottom">
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
};

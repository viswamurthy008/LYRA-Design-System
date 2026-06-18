import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = { title: 'Feedback/Progress', component: Progress };
export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Progress value={60} label="60%" />
    </div>
  ),
};
export const Empty: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Progress value={0} />
    </div>
  ),
};
export const Full: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Progress value={100} label="Complete" />
    </div>
  ),
};

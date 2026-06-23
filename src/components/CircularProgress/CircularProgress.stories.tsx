import type { Meta, StoryObj } from '@storybook/react-vite';
import { CircularProgress } from './CircularProgress';

const meta: Meta<typeof CircularProgress> = {
  title: 'Feedback/CircularProgress',
  component: CircularProgress,
};
export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const Default: Story = { args: { value: 66, showLabel: true } };
export const Large: Story = { args: { value: 40, size: 96, strokeWidth: 8, showLabel: true } };
export const Steps: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      {[10, 40, 75, 100].map((v) => (
        <CircularProgress key={v} value={v} showLabel />
      ))}
    </div>
  ),
};

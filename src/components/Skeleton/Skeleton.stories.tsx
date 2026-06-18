import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = { title: 'Feedback/Skeleton', component: Skeleton };
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Card: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: 280 }}>
      <Skeleton height={120} radius="12px" />
      <Skeleton width="60%" />
      <Skeleton width="90%" />
      <Skeleton width="40%" />
    </div>
  ),
};
export const Avatar: Story = { render: () => <Skeleton width={48} height={48} circle /> };

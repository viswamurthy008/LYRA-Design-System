import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmptyState } from './EmptyState';
import { Button } from '../Button/Button';

const meta: Meta<typeof EmptyState> = { title: 'Feedback/EmptyState', component: EmptyState };
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    icon: (
      <span aria-hidden style={{ fontSize: 24 }}>
        📭
      </span>
    ),
    title: 'No projects yet',
    description: 'Create your first project to get started.',
    action: <Button variant="primary">New project</Button>,
  },
};

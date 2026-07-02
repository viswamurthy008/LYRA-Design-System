import type { Meta, StoryObj } from '@storybook/react-vite';
import { NotificationCenter } from './NotificationCenter';

const meta: Meta<typeof NotificationCenter> = {
  title: 'Feedback/NotificationCenter',
  component: NotificationCenter,
};
export default meta;
type Story = StoryObj<typeof NotificationCenter>;

const notifications = [
  {
    id: '1',
    title: 'Deployment succeeded',
    description: 'lyra-design-system v1.5.0 is live.',
    time: '2m',
    unread: true,
    icon: '🚀',
  },
  {
    id: '2',
    title: 'New comment on Button',
    description: 'Sam: "Can we add a ghost variant?"',
    time: '1h',
    unread: true,
    icon: '💬',
  },
  {
    id: '3',
    title: 'Weekly report ready',
    description: 'Usage analytics for June are in.',
    time: '1d',
    icon: '📈',
  },
];

export const Default: Story = {
  render: () => <NotificationCenter notifications={notifications} onMarkAllRead={() => {}} />,
};

export const Empty: Story = {
  render: () => <NotificationCenter notifications={[]} />,
};

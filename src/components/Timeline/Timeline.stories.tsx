import type { Meta, StoryObj } from '@storybook/react-vite';
import { Timeline } from './Timeline';

const meta: Meta<typeof Timeline> = { title: 'Navigation/Timeline', component: Timeline };
export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    items: [
      { id: '1', title: 'Account created', time: '2 min ago', description: 'Welcome aboard.' },
      { id: '2', title: 'Profile updated', time: '1 hr ago' },
      {
        id: '3',
        title: 'First project added',
        time: 'Yesterday',
        description: 'Design System — MVP.',
      },
    ],
  },
};

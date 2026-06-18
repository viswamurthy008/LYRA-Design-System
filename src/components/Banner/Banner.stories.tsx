import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './Banner';

const meta: Meta<typeof Banner> = {
  title: 'Feedback/Banner',
  component: Banner,
  argTypes: { type: { control: 'select', options: ['info', 'success', 'warning', 'error'] } },
};
export default meta;
type Story = StoryObj<typeof Banner>;

export const Info: Story = {
  args: {
    type: 'info',
    message: 'Scheduled maintenance this weekend.',
    actionLabel: 'Learn more',
    onDismiss: () => {},
  },
};
export const Error: Story = {
  args: {
    type: 'error',
    message: 'Your payment failed.',
    actionLabel: 'Update',
    onDismiss: () => {},
  },
};

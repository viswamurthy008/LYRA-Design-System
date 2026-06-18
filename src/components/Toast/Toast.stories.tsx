import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  argTypes: { type: { control: 'select', options: ['info', 'success', 'warning', 'error'] } },
};
export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: { type: 'success', message: 'Your changes have been saved.', onDismiss: () => {} },
};
export const Error: Story = {
  args: { type: 'error', message: 'Something went wrong.', onDismiss: () => {} },
};

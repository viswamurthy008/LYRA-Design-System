import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: { type: { control: 'select', options: ['info', 'success', 'warning', 'error'] } },
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: { type: 'info', message: 'A new version of the library is available to update.' },
};
export const Success: Story = {
  args: { type: 'success', title: 'Changes saved', message: 'Your updates have been published.' },
};
export const Error: Story = {
  args: { type: 'error', message: 'We could not complete the request. Please try again.' },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    state: { control: 'select', options: ['default', 'error', 'disabled'] },
  },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: 'Email', value: 'you@example.com', state: 'default' },
};
export const Error: Story = {
  args: {
    label: 'Email',
    value: 'not-an-email',
    state: 'error',
    helperText: 'Enter a valid email address.',
  },
};
export const Disabled: Story = {
  args: { label: 'Email', value: 'you@example.com', state: 'disabled' },
};

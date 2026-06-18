import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Forms/Textarea',
  component: Textarea,
  argTypes: { state: { control: 'inline-radio', options: ['default', 'error', 'disabled'] } },
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: { label: 'Description', value: 'A short summary…', helperText: 'Max 200 characters' },
};
export const Error: Story = {
  args: { label: 'Description', state: 'error', helperText: 'Description is required.' },
};
export const Disabled: Story = {
  args: { label: 'Description', state: 'disabled', value: 'Read only' },
};

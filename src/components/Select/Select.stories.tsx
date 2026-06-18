import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
  argTypes: { state: { control: 'inline-radio', options: ['default', 'error', 'disabled'] } },
};
export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
  { value: 'c', label: 'Option C' },
];

export const Default: Story = { args: { label: 'Choice', options } };
export const Selected: Story = { args: { label: 'Choice', options, value: 'b' } };
export const Disabled: Story = { args: { label: 'Choice', options, state: 'disabled' } };

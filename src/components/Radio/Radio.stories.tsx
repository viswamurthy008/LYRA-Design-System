import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = { title: 'Forms/Radio', component: Radio };
export default meta;
type Story = StoryObj<typeof Radio>;

export const Unselected: Story = { args: { name: 'demo', label: 'Option A', checked: false } };
export const Selected: Story = { args: { name: 'demo', label: 'Option A', checked: true } };
export const Disabled: Story = {
  args: { name: 'demo', label: 'Option A', checked: true, disabled: true },
};

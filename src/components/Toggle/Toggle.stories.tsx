import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = { title: 'Forms/Toggle', component: Toggle };
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Off: Story = { args: { label: 'Enable notifications', checked: false } };
export const On: Story = { args: { label: 'Enable notifications', checked: true } };
export const Disabled: Story = {
  args: { label: 'Enable notifications', checked: true, disabled: true },
};

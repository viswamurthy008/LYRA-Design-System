import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = { title: 'Components/Checkbox', component: Checkbox };
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = { args: { label: 'Remember me', checked: false } };
export const Checked: Story = { args: { label: 'Remember me', checked: true } };
export const Disabled: Story = { args: { label: 'Remember me', checked: true, disabled: true } };

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Kbd } from './Kbd';

const meta: Meta<typeof Kbd> = { title: 'Utility/Kbd', component: Kbd };
export default meta;
type Story = StoryObj<typeof Kbd>;

export const Single: Story = { args: { children: 'Esc' } };
export const Combo: Story = { args: { keys: ['⌘', 'K'] } };

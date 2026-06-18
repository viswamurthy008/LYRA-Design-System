import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Actions/IconButton',
  component: IconButton,
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
};
export default meta;
type Story = StoryObj<typeof IconButton>;

const Plus = <span aria-hidden>+</span>;

export const Secondary: Story = { args: { icon: Plus, variant: 'secondary', 'aria-label': 'Add' } };
export const Primary: Story = { args: { icon: Plus, variant: 'primary', 'aria-label': 'Add' } };
export const Ghost: Story = { args: { icon: Plus, variant: 'ghost', 'aria-label': 'Add' } };

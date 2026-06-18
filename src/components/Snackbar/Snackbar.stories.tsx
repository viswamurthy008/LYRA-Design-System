import type { Meta, StoryObj } from '@storybook/react-vite';
import { Snackbar } from './Snackbar';

const meta: Meta<typeof Snackbar> = { title: 'Feedback/Snackbar', component: Snackbar };
export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
  args: { message: 'Message archived', actionLabel: 'Undo', onAction: () => {} },
};

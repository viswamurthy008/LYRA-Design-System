import type { Meta, StoryObj } from '@storybook/react-vite';
import { TimePicker } from './TimePicker';

const meta: Meta<typeof TimePicker> = { title: 'Pickers/TimePicker', component: TimePicker };
export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Default: Story = { args: { value: { hour: '10', minute: '30', period: 'AM' } } };

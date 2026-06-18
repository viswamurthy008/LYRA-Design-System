import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Navigation/Stepper',
  component: Stepper,
  argTypes: { orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] } },
};
export default meta;
type Story = StoryObj<typeof Stepper>;

const steps = [
  { id: '1', title: 'Account details', description: 'Your name and email' },
  { id: '2', title: 'Company profile', description: 'Tell us about your team' },
  { id: '3', title: 'Confirmation', description: 'Review and finish' },
];

export const Horizontal: Story = { args: { steps, current: 1, orientation: 'horizontal' } };
export const Vertical: Story = { args: { steps, current: 1, orientation: 'vertical' } };

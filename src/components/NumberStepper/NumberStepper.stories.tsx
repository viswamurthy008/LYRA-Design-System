import type { Meta, StoryObj } from '@storybook/react-vite';
import { NumberStepper } from './NumberStepper';

const meta: Meta<typeof NumberStepper> = { title: 'Forms/NumberStepper', component: NumberStepper };
export default meta;
type Story = StoryObj<typeof NumberStepper>;

export const Default: Story = { args: { label: 'Quantity', value: 1, min: 0, max: 10 } };
export const Disabled: Story = { args: { label: 'Quantity', value: 1, disabled: true } };

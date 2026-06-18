import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = { title: 'Data Display/Chip', component: Chip };
export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = { args: { label: 'Design' } };
export const Selected: Story = { args: { label: 'Design', selected: true } };
export const Removable: Story = { args: { label: 'Design', onRemove: () => {} } };

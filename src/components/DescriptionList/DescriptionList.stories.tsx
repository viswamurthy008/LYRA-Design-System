import type { Meta, StoryObj } from '@storybook/react-vite';
import { DescriptionList } from './DescriptionList';

const meta: Meta<typeof DescriptionList> = {
  title: 'Data Display/DescriptionList',
  component: DescriptionList,
};
export default meta;
type Story = StoryObj<typeof DescriptionList>;

const items = [
  { term: 'Plan', description: 'Starter' },
  { term: 'Seats', description: '12 of 20' },
  { term: 'Renews', description: 'Jul 1, 2026' },
  { term: 'Owner', description: 'viswamurthy008@gmail.com' },
];

export const Row: Story = { args: { items } };
export const Stacked: Story = { args: { items, layout: 'stack' } };

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Calendar } from './Calendar';

const meta: Meta<typeof Calendar> = { title: 'Data Display/Calendar', component: Calendar };
export default meta;
type Story = StoryObj<typeof Calendar>;

const now = new Date();
const day = (d: number) => new Date(now.getFullYear(), now.getMonth(), d);

export const Default: Story = {
  args: {
    events: [
      { date: day(5), label: 'Holiday', kind: 'success' },
      { date: day(12), label: 'Design review', kind: 'brand' },
      { date: day(20), label: 'Launch', kind: 'danger' },
    ],
  },
};

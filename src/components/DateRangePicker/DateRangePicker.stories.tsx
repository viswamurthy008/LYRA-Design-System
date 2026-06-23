import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { DateRangePicker, type DateRange } from './DateRangePicker';

const meta: Meta<typeof DateRangePicker> = {
  title: 'Pickers/DateRangePicker',
  component: DateRangePicker,
};
export default meta;
type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {
  render: () => {
    const now = new Date();
    const [range, setRange] = useState<DateRange>({
      start: new Date(now.getFullYear(), now.getMonth(), 8),
      end: new Date(now.getFullYear(), now.getMonth(), 16),
    });
    return <DateRangePicker value={range} onChange={setRange} />;
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { SegmentedControl } from './SegmentedControl';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Forms/SegmentedControl',
  component: SegmentedControl,
};
export default meta;
type Story = StoryObj<typeof SegmentedControl>;

const options = [
  { value: 'list', label: 'List' },
  { value: 'grid', label: 'Grid' },
  { value: 'board', label: 'Board' },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('grid');
    return <SegmentedControl options={options} value={value} onChange={setValue} />;
  },
};

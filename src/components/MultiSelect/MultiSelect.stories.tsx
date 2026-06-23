import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { MultiSelect } from './MultiSelect';

const meta: Meta<typeof MultiSelect> = { title: 'Forms/MultiSelect', component: MultiSelect };
export default meta;
type Story = StoryObj<typeof MultiSelect>;

const options = [
  { value: 'design', label: 'Design' },
  { value: 'eng', label: 'Engineering' },
  { value: 'pm', label: 'Product' },
  { value: 'sales', label: 'Sales' },
  { value: 'support', label: 'Support' },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(['design', 'eng']);
    return (
      <div style={{ width: 320 }}>
        <MultiSelect label="Teams" options={options} value={value} onChange={setValue} />
      </div>
    );
  },
};

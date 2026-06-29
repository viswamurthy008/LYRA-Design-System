import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { RangeSlider } from './RangeSlider';

const meta: Meta<typeof RangeSlider> = { title: 'Forms/RangeSlider', component: RangeSlider };
export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
  render: () => {
    const [range, setRange] = useState<[number, number]>([25, 70]);
    return (
      <div
        style={{ width: 320, fontFamily: 'Inter, sans-serif', color: 'var(--color-text-default)' }}
      >
        <RangeSlider value={range} onChange={setRange} />
        <p style={{ fontSize: 13, color: 'var(--color-text-subtle)' }}>
          {range[0]} – {range[1]}
        </p>
      </div>
    );
  },
};

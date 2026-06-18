import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = { title: 'Forms/Slider', component: Slider };
export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(40);
    return (
      <div style={{ width: 280 }}>
        <Slider label="Volume" value={value} onChange={setValue} />
      </div>
    );
  },
};

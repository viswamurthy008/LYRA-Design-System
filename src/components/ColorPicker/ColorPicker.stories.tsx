import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { ColorPicker } from './ColorPicker';

const meta: Meta<typeof ColorPicker> = { title: 'Pickers/ColorPicker', component: ColorPicker };
export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  render: () => {
    const [color, setColor] = useState('#2563EB');
    return <ColorPicker value={color} onChange={setColor} />;
  },
};

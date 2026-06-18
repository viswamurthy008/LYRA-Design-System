import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Rating } from './Rating';

const meta: Meta<typeof Rating> = { title: 'Data Display/Rating', component: Rating };
export default meta;
type Story = StoryObj<typeof Rating>;

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState(3);
    return <Rating value={value} onChange={setValue} />;
  },
};
export const ReadOnly: Story = { args: { value: 4, readOnly: true } };

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { OtpInput } from './OtpInput';

const meta: Meta<typeof OtpInput> = { title: 'Forms/OtpInput', component: OtpInput };
export default meta;
type Story = StoryObj<typeof OtpInput>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('42');
    return <OtpInput length={6} value={value} onChange={setValue} />;
  },
};

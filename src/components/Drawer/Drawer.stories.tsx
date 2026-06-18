import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Drawer } from './Drawer';
import { Button } from '../Button/Button';

const meta: Meta<typeof Drawer> = {
  title: 'Overlays/Drawer',
  component: Drawer,
  argTypes: { side: { control: 'inline-radio', options: ['left', 'right'] } },
};
export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open drawer</Button>
        <Drawer {...args} open={open} title="Filters" onClose={() => setOpen(false)}>
          <p>Drawer body content goes here.</p>
        </Drawer>
      </>
    );
  },
  args: { side: 'right' },
};

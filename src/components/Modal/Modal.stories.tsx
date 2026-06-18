import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

const meta: Meta<typeof Modal> = { title: 'Overlays/Modal', component: Modal };
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          open={open}
          title="Delete item?"
          description="This action cannot be undone. The item will be permanently removed."
          confirmLabel="Delete"
          onConfirm={() => setOpen(false)}
          onClose={() => setOpen(false)}
        />
      </>
    );
  },
};

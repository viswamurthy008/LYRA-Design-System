import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { CommandPalette } from './CommandPalette';
import { Button } from '../Button/Button';

const meta: Meta<typeof CommandPalette> = {
  title: 'Overlays/CommandPalette',
  component: CommandPalette,
};
export default meta;
type Story = StoryObj<typeof CommandPalette>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open command palette</Button>
        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          commands={[
            { id: 'new', label: 'Create new file', shortcut: '⌘N' },
            { id: 'search', label: 'Search projects', shortcut: '⌘K' },
            { id: 'settings', label: 'Open settings', shortcut: '⌘,' },
            { id: 'invite', label: 'Invite teammates' },
          ]}
        />
      </>
    );
  },
};

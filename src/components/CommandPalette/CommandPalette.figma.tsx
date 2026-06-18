import figma from '@figma/code-connect';
import { CommandPalette } from './CommandPalette';

// Figma "Command Palette" — node 28:1031
figma.connect(CommandPalette, '<DS_FILE>?node-id=28-1031', {
  example: () => (
    <CommandPalette
      open
      commands={[
        { id: 'new', label: 'Create new file', shortcut: '⌘N' },
        { id: 'search', label: 'Search projects', shortcut: '⌘K' },
      ]}
    />
  ),
});

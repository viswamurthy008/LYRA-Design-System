import figma from '@figma/code-connect';
import { Popover } from './Popover';

// Figma "Popover" — node 28:634
figma.connect(Popover, '<DS_FILE>?node-id=28-634', {
  example: () => <Popover trigger={<button>Open</button>}>Popover content</Popover>,
});

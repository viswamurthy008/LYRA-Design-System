import figma from '@figma/code-connect';
import { Kbd } from './Kbd';

// Figma "Kbd" — node 64:259
figma.connect(Kbd, '<DS_FILE>?node-id=64-259', {
  example: () => <Kbd keys={['⌘', 'K']} />,
});

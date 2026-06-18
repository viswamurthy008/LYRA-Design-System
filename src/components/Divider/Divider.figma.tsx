import figma from '@figma/code-connect';
import { Divider } from './Divider';

// Figma "Divider" — node 28:665
figma.connect(Divider, '<DS_FILE>?node-id=28-665', {
  example: () => <Divider />,
});

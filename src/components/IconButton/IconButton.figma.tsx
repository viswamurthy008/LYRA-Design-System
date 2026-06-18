import figma from '@figma/code-connect';
import { IconButton } from './IconButton';

// Figma "Icon Button" — node 28:482
figma.connect(IconButton, '<DS_FILE>?node-id=28-482', {
  example: () => <IconButton aria-label="Action" icon={<svg width="18" height="18" />} />,
});

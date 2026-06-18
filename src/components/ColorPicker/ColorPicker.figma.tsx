import figma from '@figma/code-connect';
import { ColorPicker } from './ColorPicker';

// Figma "Color Picker" — node 28:1079
figma.connect(ColorPicker, '<DS_FILE>?node-id=28-1079', {
  example: () => <ColorPicker value="#2563EB" />,
});

import figma from '@figma/code-connect';
import { Sparkline } from './Sparkline';

// Figma "Sparkline" — node 64:209
figma.connect(Sparkline, '<DS_FILE>?node-id=64-209', {
  example: () => <Sparkline data={[4, 6, 5, 8, 7, 11, 9, 13, 12, 16]} area />,
});

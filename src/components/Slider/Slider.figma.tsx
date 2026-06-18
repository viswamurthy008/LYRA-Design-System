import figma from '@figma/code-connect';
import { Slider } from './Slider';

// Figma "Slider" — node 28:375
figma.connect(Slider, '<DS_FILE>?node-id=28-375', {
  example: () => <Slider label="Value" value={40} />,
});

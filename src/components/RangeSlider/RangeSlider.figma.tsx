import figma from '@figma/code-connect';
import { RangeSlider } from './RangeSlider';

// Figma "Range Slider" — node 65:345
figma.connect(RangeSlider, '<DS_FILE>?node-id=65-345', {
  example: () => <RangeSlider min={0} max={100} value={[25, 70]} />,
});

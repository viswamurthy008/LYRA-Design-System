import figma from '@figma/code-connect';
import { Carousel } from './Carousel';

// Figma "Carousel" — node 27:144
figma.connect(Carousel, '<DS_FILE>?node-id=27-144', {
  example: () => <Carousel slides={[<div key="1">Slide 1</div>, <div key="2">Slide 2</div>]} />,
});

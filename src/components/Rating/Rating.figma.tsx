import figma from '@figma/code-connect';
import { Rating } from './Rating';

// Figma "Rating" — node 28:426
figma.connect(Rating, '<DS_FILE>?node-id=28-426', {
  example: () => <Rating value={4} />,
});

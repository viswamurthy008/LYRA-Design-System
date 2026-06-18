import figma from '@figma/code-connect';
import { Spinner } from './Spinner';

// Figma "Spinner" component set — node 23:187
figma.connect(Spinner, '<DS_FILE>?node-id=23-187', {
  props: { size: figma.enum('Size', { SM: 'sm', MD: 'md', LG: 'lg' }) },
  example: ({ size }) => <Spinner size={size} />,
});

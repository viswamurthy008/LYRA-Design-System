import figma from '@figma/code-connect';
import { Badge } from './Badge';

// Figma "Badge" component set — node 9:13
figma.connect(Badge, '<DS_FILE>?node-id=9-13', {
  props: {
    label: figma.string('Label'),
    variant: figma.enum('Style', {
      Default: 'default',
      Success: 'success',
      Warning: 'warning',
      Error: 'error',
    }),
  },
  example: ({ label, variant }) => <Badge variant={variant}>{label}</Badge>,
});

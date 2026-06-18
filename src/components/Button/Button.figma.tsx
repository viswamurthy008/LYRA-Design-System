import figma from '@figma/code-connect';
import { Button } from './Button';

// Figma "Button" component set — node 9:2
figma.connect(Button, '<DS_FILE>?node-id=9-2', {
  props: {
    label: figma.string('Label'),
    variant: figma.enum('Style', {
      Primary: 'primary',
      Secondary: 'secondary',
      Ghost: 'ghost',
    }),
    size: figma.enum('Size', { SM: 'sm', MD: 'md', LG: 'lg' }),
    disabled: figma.enum('State', { Default: false, Disabled: true }),
  },
  example: ({ label, variant, size, disabled }) => (
    <Button variant={variant} size={size} disabled={disabled}>
      {label}
    </Button>
  ),
});

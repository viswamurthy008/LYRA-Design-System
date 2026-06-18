import figma from '@figma/code-connect';
import { Radio } from './Radio';

// Figma "Radio" component set — node 9:523
figma.connect(Radio, '<DS_FILE>?node-id=9-523', {
  props: {
    checked: figma.enum('Selected', { true: true, false: false }),
    disabled: figma.enum('State', { Default: false, Disabled: true }),
  },
  example: ({ checked, disabled }) => (
    <Radio label="Option" checked={checked} disabled={disabled} />
  ),
});

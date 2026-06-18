import figma from '@figma/code-connect';
import { Toggle } from './Toggle';

// Figma "Toggle" component set — node 9:69
figma.connect(Toggle, '<DS_FILE>?node-id=9-69', {
  props: {
    checked: figma.enum('On', { True: true, False: false }),
    disabled: figma.enum('State', { Default: false, Disabled: true }),
  },
  example: ({ checked, disabled }) => (
    <Toggle label="Setting" checked={checked} disabled={disabled} />
  ),
});

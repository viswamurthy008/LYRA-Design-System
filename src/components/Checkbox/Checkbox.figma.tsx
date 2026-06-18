import figma from '@figma/code-connect';
import { Checkbox } from './Checkbox';

// Figma "Checkbox" component set — node 9:50
figma.connect(Checkbox, '<DS_FILE>?node-id=9-50', {
  props: {
    label: figma.string('Label'),
    checked: figma.enum('Checked', { True: true, False: false }),
    disabled: figma.enum('State', { Default: false, Disabled: true }),
  },
  example: ({ label, checked, disabled }) => (
    <Checkbox label={label} checked={checked} disabled={disabled} />
  ),
});

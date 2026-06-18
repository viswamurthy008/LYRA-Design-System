import figma from '@figma/code-connect';
import { Select } from './Select';

// Figma "Select" component set — node 9:162
figma.connect(Select, '<DS_FILE>?node-id=9-162', {
  props: {
    label: figma.string('Label'),
    state: figma.enum('State', {
      Default: 'default',
      Open: 'default',
      Selected: 'default',
      Disabled: 'disabled',
    }),
  },
  example: ({ label, state }) => (
    <Select label={label} state={state} options={[{ value: 'a', label: 'Option A' }]} />
  ),
});

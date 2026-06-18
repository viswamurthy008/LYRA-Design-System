import figma from '@figma/code-connect';
import { Input } from './Input';

// Figma "Input" component set — node 9:33
figma.connect(Input, '<DS_FILE>?node-id=9-33', {
  props: {
    label: figma.string('Label'),
    value: figma.string('Value'),
    state: figma.enum('State', {
      Default: 'default',
      Focus: 'default',
      Error: 'error',
      Disabled: 'disabled',
    }),
  },
  example: ({ label, value, state }) => <Input label={label} value={value} state={state} />,
});

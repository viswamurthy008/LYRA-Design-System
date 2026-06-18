import figma from '@figma/code-connect';
import { Textarea } from './Textarea';

// Figma "Textarea" component set — node 27:197
figma.connect(Textarea, '<DS_FILE>?node-id=27-197', {
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
  example: ({ label, value, state }) => <Textarea label={label} value={value} state={state} />,
});

import figma from '@figma/code-connect';
import { MultiSelect } from './MultiSelect';

// Figma "Multi-select" — node 58:257
figma.connect(MultiSelect, '<DS_FILE>?node-id=58-257', {
  example: () => (
    <MultiSelect
      label="Teams"
      value={['design', 'eng']}
      options={[
        { value: 'design', label: 'Design' },
        { value: 'eng', label: 'Engineering' },
        { value: 'pm', label: 'Product' },
      ]}
    />
  ),
});

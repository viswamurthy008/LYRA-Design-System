import figma from '@figma/code-connect';
import { FormField } from './FormField';
import { Input } from '../Input/Input';

// Figma "Form Field" — node 75:206
figma.connect(FormField, '<DS_FILE>?node-id=75-206', {
  example: () => (
    <FormField label="Email" error="Enter a valid email address." required>
      <Input placeholder="you@example.com" />
    </FormField>
  ),
});

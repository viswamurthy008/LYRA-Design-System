import figma from '@figma/code-connect';
import { Stack } from './Stack';

// Figma "Stack" — node 65:280
figma.connect(Stack, '<DS_FILE>?node-id=65-280', {
  example: () => (
    <Stack gap={12}>
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </Stack>
  ),
});

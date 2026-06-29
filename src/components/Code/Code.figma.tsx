import figma from '@figma/code-connect';
import { Code } from './Code';

// Figma "Code" — node 64:268
figma.connect(Code, '<DS_FILE>?node-id=64-268', {
  example: () => (
    <Code block language="tsx">
      {`import { Button } from 'lyra-design-system';`}
    </Code>
  ),
});

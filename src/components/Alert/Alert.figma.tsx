import figma from '@figma/code-connect';
import { Alert } from './Alert';

// Figma "Alert" component set — node 23:313
figma.connect(Alert, '<DS_FILE>?node-id=23-313', {
  props: {
    message: figma.string('Message'),
    type: figma.enum('Type', {
      Info: 'info',
      Success: 'success',
      Warning: 'warning',
      Error: 'error',
    }),
  },
  example: ({ type, message }) => <Alert type={type} message={message} onDismiss={() => {}} />,
});

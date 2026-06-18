import figma from '@figma/code-connect';
import { Toast } from './Toast';

// Figma "Toast" component set — node 9:132
figma.connect(Toast, '<DS_FILE>?node-id=9-132', {
  props: {
    type: figma.enum('Type', {
      Info: 'info',
      Success: 'success',
      Warning: 'warning',
      Error: 'error',
    }),
    message: figma.string('Message'),
  },
  example: ({ type, message }) => <Toast type={type} message={message} onDismiss={() => {}} />,
});

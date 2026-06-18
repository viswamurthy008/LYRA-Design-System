import figma from '@figma/code-connect';
import { Banner } from './Banner';

// Figma "Banner" — node 28:589
figma.connect(Banner, '<DS_FILE>?node-id=28-589', {
  props: {
    type: figma.enum('Type', {
      Info: 'info',
      Success: 'success',
      Warning: 'warning',
      Error: 'error',
    }),
  },
  example: ({ type }) => (
    <Banner type={type} message="Announcement message." onDismiss={() => {}} />
  ),
});

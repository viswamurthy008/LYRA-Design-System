import figma from '@figma/code-connect';
import { Tour } from './Tour';

// Figma "Tour / Coachmark" — node 75:217
figma.connect(Tour, '<DS_FILE>?node-id=75-217', {
  example: () => (
    <Tour
      open
      steps={[
        { target: '#new-project', title: 'Start here', content: 'This button kicks things off.' },
        { target: '#search', title: 'Find anything', content: 'Search across the app.' },
      ]}
    />
  ),
});

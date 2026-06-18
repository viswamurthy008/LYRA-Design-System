import figma from '@figma/code-connect';
import { Calendar } from './Calendar';

// Figma "Calendar / Schedule" — node 28:1138
figma.connect(Calendar, '<DS_FILE>?node-id=28-1138', {
  example: () => <Calendar events={[{ date: new Date(), label: 'Event', kind: 'brand' }]} />,
});

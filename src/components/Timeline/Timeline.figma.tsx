import figma from '@figma/code-connect';
import { Timeline } from './Timeline';

// Figma "Timeline / Activity" — node 28:772
figma.connect(Timeline, '<DS_FILE>?node-id=28-772', {
  example: () => (
    <Timeline items={[{ id: '1', title: 'Event', time: '2 min ago', description: 'Details' }]} />
  ),
});

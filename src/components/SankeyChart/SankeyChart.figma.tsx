import figma from '@figma/code-connect';
import { SankeyChart } from './SankeyChart';

// Figma "Sankey Diagram" — node 66:507
figma.connect(SankeyChart, '<DS_FILE>?node-id=66-507', {
  example: () => (
    <SankeyChart
      nodes={[
        { id: 'visit', label: 'Visits' },
        { id: 'signup', label: 'Sign-ups' },
        { id: 'bounce', label: 'Bounced' },
        { id: 'paid', label: 'Paid' },
        { id: 'free', label: 'Free' },
      ]}
      links={[
        { source: 'visit', target: 'signup', value: 60 },
        { source: 'visit', target: 'bounce', value: 40 },
        { source: 'signup', target: 'paid', value: 25 },
        { source: 'signup', target: 'free', value: 35 },
      ]}
    />
  ),
});

import figma from '@figma/code-connect';
import { AreaChart } from './AreaChart';

// Figma "Area Chart" — node 66:389
figma.connect(AreaChart, '<DS_FILE>?node-id=66-389', {
  example: () => (
    <AreaChart
      labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
      series={[{ name: 'Sessions', values: [120, 180, 150, 220, 200, 260, 240] }]}
    />
  ),
});

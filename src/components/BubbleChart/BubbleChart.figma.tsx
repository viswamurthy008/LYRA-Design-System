import figma from '@figma/code-connect';
import { BubbleChart } from './BubbleChart';

// Figma "Bubble Chart" — node 66:463
figma.connect(BubbleChart, '<DS_FILE>?node-id=66-463', {
  example: () => (
    <BubbleChart
      series={[
        {
          name: 'Markets',
          points: [
            { x: 20, y: 30, size: 80 },
            { x: 60, y: 45, size: 60 },
            { x: 50, y: 55, size: 160 },
          ],
        },
      ]}
    />
  ),
});

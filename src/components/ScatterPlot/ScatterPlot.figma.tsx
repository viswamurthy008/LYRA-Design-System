import figma from '@figma/code-connect';
import { ScatterPlot } from './ScatterPlot';

// Figma "Scatter Plot" — node 66:449
figma.connect(ScatterPlot, '<DS_FILE>?node-id=66-449', {
  example: () => (
    <ScatterPlot
      series={[
        {
          name: 'Group A',
          points: [
            { x: 10, y: 20 },
            { x: 50, y: 65 },
            { x: 80, y: 70 },
          ],
        },
      ]}
    />
  ),
});

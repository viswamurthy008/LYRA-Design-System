import figma from '@figma/code-connect';
import { BarChart } from './BarChart';

// Figma "Bar Chart" — node 66:408
figma.connect(BarChart, '<DS_FILE>?node-id=66-408', {
  example: () => (
    <BarChart
      labels={['Q1', 'Q2', 'Q3', 'Q4']}
      series={[
        { name: '2025', values: [24, 31, 28, 40] },
        { name: '2026', values: [30, 38, 35, 52] },
      ]}
    />
  ),
});

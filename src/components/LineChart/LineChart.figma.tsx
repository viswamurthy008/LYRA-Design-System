import figma from '@figma/code-connect';
import { LineChart } from './LineChart';

// Figma "Line Chart" — node 66:376
figma.connect(LineChart, '<DS_FILE>?node-id=66-376', {
  example: () => (
    <LineChart
      labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
      series={[
        { name: 'Revenue', values: [12, 19, 15, 27, 24, 33] },
        { name: 'Costs', values: [8, 11, 9, 14, 13, 18] },
      ]}
    />
  ),
});

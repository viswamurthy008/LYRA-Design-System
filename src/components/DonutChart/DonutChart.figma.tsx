import figma from '@figma/code-connect';
import { DonutChart } from './DonutChart';

// Figma "Donut Chart" — node 66:418
figma.connect(DonutChart, '<DS_FILE>?node-id=66-418', {
  example: () => (
    <DonutChart
      data={[
        { label: 'Direct', value: 45 },
        { label: 'Referral', value: 25 },
        { label: 'Social', value: 18 },
        { label: 'Email', value: 12 },
      ]}
    />
  ),
});

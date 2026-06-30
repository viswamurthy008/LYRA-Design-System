import figma from '@figma/code-connect';
import { WaterfallChart } from './WaterfallChart';

// Figma "Waterfall Chart" — node 66:480
figma.connect(WaterfallChart, '<DS_FILE>?node-id=66-480', {
  example: () => (
    <WaterfallChart
      steps={[
        { label: 'Start', value: 100 },
        { label: 'Sales', value: 60 },
        { label: 'Refunds', value: -25 },
        { label: 'Fees', value: -15 },
        { label: 'Other', value: 30 },
      ]}
    />
  ),
});

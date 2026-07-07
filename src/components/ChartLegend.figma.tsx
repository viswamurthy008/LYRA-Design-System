import figma from '@figma/code-connect';
import { ChartLegend } from './chartUtils';

// Figma "Chart Legend" — node 86:231
figma.connect(ChartLegend, '<DS_FILE>?node-id=86-231', {
  example: () => <ChartLegend items={['Revenue', 'Costs', 'Margin', 'Target']} />,
});

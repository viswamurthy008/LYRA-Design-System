import figma from '@figma/code-connect';
import { MiniBarChart } from './MiniBarChart';

// Figma "Mini Bar Chart" — node 64:214
figma.connect(MiniBarChart, '<DS_FILE>?node-id=64-214', {
  example: () => <MiniBarChart data={[12, 18, 9, 22, 16, 27, 20, 31]} highlightIndex={7} />,
});

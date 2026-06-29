import figma from '@figma/code-connect';
import { Metric } from './Metric';

// Figma "Metric" — node 64:227
figma.connect(Metric, '<DS_FILE>?node-id=64-227', {
  example: () => (
    <Metric label="Revenue" value="$48.2k" delta={12.5} sparkline={[4, 6, 5, 8, 7, 11, 9, 13]} />
  ),
});

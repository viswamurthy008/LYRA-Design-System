import figma from '@figma/code-connect';
import { Treemap } from './Treemap';

// Figma "Treemap" — node 66:492
figma.connect(Treemap, '<DS_FILE>?node-id=66-492', {
  example: () => (
    <Treemap
      data={[
        { label: 'Compute', value: 420 },
        { label: 'Storage', value: 260 },
        { label: 'Network', value: 180 },
        { label: 'Database', value: 150 },
        { label: 'CDN', value: 90 },
        { label: 'Other', value: 60 },
      ]}
    />
  ),
});

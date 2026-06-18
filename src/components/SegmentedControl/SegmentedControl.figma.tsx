import figma from '@figma/code-connect';
import { SegmentedControl } from './SegmentedControl';

// Figma "Segmented Control" — node 28:380
figma.connect(SegmentedControl, '<DS_FILE>?node-id=28-380', {
  example: () => (
    <SegmentedControl
      value="grid"
      options={[
        { value: 'list', label: 'List' },
        { value: 'grid', label: 'Grid' },
      ]}
    />
  ),
});

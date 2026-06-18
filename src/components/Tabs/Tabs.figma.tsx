import figma from '@figma/code-connect';
import { Tabs } from './Tabs';

// Figma "Tabs" component set — node 9:558
figma.connect(Tabs, '<DS_FILE>?node-id=9-558', {
  example: () => (
    <Tabs
      value="overview"
      tabs={[
        { id: 'overview', label: 'Overview' },
        { id: 'activity', label: 'Activity' },
      ]}
    />
  ),
});

import figma from '@figma/code-connect';
import { Sidebar } from './Sidebar';

// Figma "Sidebar" — node 23:424
figma.connect(Sidebar, '<DS_FILE>?node-id=23-424', {
  example: () => (
    <Sidebar
      brand="Acme Inc."
      activeId="dashboard"
      items={[
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'settings', label: 'Settings' },
      ]}
    />
  ),
});

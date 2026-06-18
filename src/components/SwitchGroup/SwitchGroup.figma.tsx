import figma from '@figma/code-connect';
import { SwitchGroup } from './SwitchGroup';

// Figma "Switch Group" — node 28:444
figma.connect(SwitchGroup, '<DS_FILE>?node-id=28-444', {
  example: () => <SwitchGroup items={[{ id: '1', label: 'Setting', checked: true }]} />,
});

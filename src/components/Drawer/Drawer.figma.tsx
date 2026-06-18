import figma from '@figma/code-connect';
import { Drawer } from './Drawer';

// Figma "Drawer / Side sheet" — node 28:535
figma.connect(Drawer, '<DS_FILE>?node-id=28-535', {
  props: { side: figma.enum('Side', { Left: 'left', Right: 'right' }) },
  example: ({ side }) => (
    <Drawer open side={side} title="Panel" onClose={() => {}}>
      Content
    </Drawer>
  ),
});

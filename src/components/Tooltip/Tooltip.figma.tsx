import figma from '@figma/code-connect';
import { Tooltip } from './Tooltip';

// Figma "Tooltip" component set — node 9:571
figma.connect(Tooltip, '<DS_FILE>?node-id=9-571', {
  props: {
    text: figma.string('Text'),
    position: figma.enum('Position', { Top: 'top', Bottom: 'bottom' }),
  },
  example: ({ text, position }) => (
    <Tooltip content={text} position={position}>
      <button>Trigger</button>
    </Tooltip>
  ),
});

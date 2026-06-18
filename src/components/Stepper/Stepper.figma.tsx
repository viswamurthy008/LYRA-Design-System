import figma from '@figma/code-connect';
import { Stepper } from './Stepper';

// Figma "Stepper" component set — node 28:1030
figma.connect(Stepper, '<DS_FILE>?node-id=28-1030', {
  props: {
    orientation: figma.enum('Orientation', { Horizontal: 'horizontal', Vertical: 'vertical' }),
  },
  example: ({ orientation }) => (
    <Stepper
      orientation={orientation}
      current={1}
      steps={[
        { id: '1', title: 'Step one' },
        { id: '2', title: 'Step two' },
        { id: '3', title: 'Step three' },
      ]}
    />
  ),
});

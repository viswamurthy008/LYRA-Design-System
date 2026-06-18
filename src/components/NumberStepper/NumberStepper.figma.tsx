import figma from '@figma/code-connect';
import { NumberStepper } from './NumberStepper';

// Figma "Number Stepper" component set — node 27:321
figma.connect(NumberStepper, '<DS_FILE>?node-id=27-321', {
  props: { disabled: figma.enum('State', { Default: false, Disabled: true }) },
  example: ({ disabled }) => <NumberStepper label="Quantity" value={1} disabled={disabled} />,
});

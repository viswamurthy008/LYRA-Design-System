import figma from '@figma/code-connect';
import { Progress } from './Progress';

// Figma "Progress" component set — node 9:588
figma.connect(Progress, '<DS_FILE>?node-id=9-588', {
  example: () => <Progress value={50} label="50%" />,
});

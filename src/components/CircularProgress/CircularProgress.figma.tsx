import figma from '@figma/code-connect';
import { CircularProgress } from './CircularProgress';

// Figma "Circular Progress" — node 58:235
figma.connect(CircularProgress, '<DS_FILE>?node-id=58-235', {
  example: () => <CircularProgress value={66} showLabel />,
});

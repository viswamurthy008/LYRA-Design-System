import figma from '@figma/code-connect';
import { Skeleton } from './Skeleton';

// Figma "Skeleton" — node 28:604
figma.connect(Skeleton, '<DS_FILE>?node-id=28-604', {
  example: () => <Skeleton width="100%" height={16} />,
});

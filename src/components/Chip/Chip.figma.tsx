import figma from '@figma/code-connect';
import { Chip } from './Chip';

// Figma "Chip" — node 28:421
figma.connect(Chip, '<DS_FILE>?node-id=28-421', {
  example: () => <Chip label="Tag" onRemove={() => {}} />,
});

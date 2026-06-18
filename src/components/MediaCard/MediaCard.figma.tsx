import figma from '@figma/code-connect';
import { MediaCard } from './MediaCard';

// Figma "Card / Media" — node 23:338
figma.connect(MediaCard, '<DS_FILE>?node-id=23-338', {
  example: () => <MediaCard title="Title" description="A short description." />,
});

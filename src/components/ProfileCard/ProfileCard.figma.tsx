import figma from '@figma/code-connect';
import { ProfileCard } from './ProfileCard';

// Figma "Card / Profile" — node 23:330
figma.connect(ProfileCard, '<DS_FILE>?node-id=23-330', {
  example: () => <ProfileCard initials="JC" name="Jane Cooper" role="Product Designer" />,
});

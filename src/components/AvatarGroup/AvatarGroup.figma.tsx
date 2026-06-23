import figma from '@figma/code-connect';
import { AvatarGroup } from './AvatarGroup';

// Figma "Avatar Group" — node 58:241
figma.connect(AvatarGroup, '<DS_FILE>?node-id=58-241', {
  example: () => (
    <AvatarGroup
      max={3}
      avatars={[
        { initials: 'JC' },
        { initials: 'CF' },
        { initials: 'EH' },
        { initials: 'MR' },
        { initials: 'TK' },
        { initials: 'AL' },
      ]}
    />
  ),
});

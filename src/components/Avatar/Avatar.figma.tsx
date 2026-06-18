import figma from '@figma/code-connect';
import { Avatar } from './Avatar';

// Figma "Avatar" component set — node 9:105
figma.connect(Avatar, '<DS_FILE>?node-id=9-105', {
  props: {
    size: figma.enum('Size', { XS: 'xs', SM: 'sm', MD: 'md', LG: 'lg', XL: 'xl' }),
    initials: figma.string('Initials'),
  },
  example: ({ size, initials }) => <Avatar size={size} initials={initials} />,
});

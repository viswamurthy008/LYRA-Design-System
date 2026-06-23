import type { Meta, StoryObj } from '@storybook/react-vite';
import { AvatarGroup } from './AvatarGroup';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Data Display/AvatarGroup',
  component: AvatarGroup,
};
export default meta;
type Story = StoryObj<typeof AvatarGroup>;

const people = [
  { initials: 'JC' },
  { initials: 'CF' },
  { initials: 'EH' },
  { initials: 'JW' },
  { initials: 'RF' },
  { initials: 'BS' },
];

export const Default: Story = { args: { avatars: people, max: 4 } };
export const Small: Story = { args: { avatars: people, max: 3, size: 'sm' } };
export const AllShown: Story = { args: { avatars: people.slice(0, 3), max: 5 } };

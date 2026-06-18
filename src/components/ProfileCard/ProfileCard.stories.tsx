import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProfileCard } from './ProfileCard';
import { Button } from '../Button/Button';

const meta: Meta<typeof ProfileCard> = {
  title: 'Data Display/ProfileCard',
  component: ProfileCard,
};
export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    initials: 'JC',
    name: 'Jane Cooper',
    role: 'Product Designer',
    action: (
      <Button variant="secondary" size="md">
        Message
      </Button>
    ),
  },
};

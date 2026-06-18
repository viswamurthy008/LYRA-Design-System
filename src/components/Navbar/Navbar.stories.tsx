import type { Meta, StoryObj } from '@storybook/react-vite';
import { Navbar } from './Navbar';
import { Button } from '../Button/Button';
import { Avatar } from '../Avatar/Avatar';

const meta: Meta<typeof Navbar> = { title: 'Navigation/Navbar', component: Navbar };
export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    brand: 'Acme',
    activeId: 'home',
    items: [
      { id: 'home', label: 'Home', href: '#' },
      { id: 'projects', label: 'Projects', href: '#' },
      { id: 'team', label: 'Team', href: '#' },
    ],
    actions: (
      <>
        <Button variant="ghost" size="sm">
          Sign in
        </Button>
        <Avatar size="sm" initials="JC" />
      </>
    ),
  },
};

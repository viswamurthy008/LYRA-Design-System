import type { Meta, StoryObj } from '@storybook/react-vite';
import { MediaCard } from './MediaCard';
import { Badge } from '../Badge/Badge';

const meta: Meta<typeof MediaCard> = { title: 'Data Display/MediaCard', component: MediaCard };
export default meta;
type Story = StoryObj<typeof MediaCard>;

export const Default: Story = {
  args: {
    title: 'Mountain retreat',
    description: 'A quiet getaway with sweeping alpine views.',
    badge: <Badge variant="success">Featured</Badge>,
  },
};

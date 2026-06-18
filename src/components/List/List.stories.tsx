import type { Meta, StoryObj } from '@storybook/react-vite';
import { List } from './List';
import { Badge } from '../Badge/Badge';

const meta: Meta<typeof List> = { title: 'Data Display/List', component: List };
export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    items: [
      {
        id: '1',
        primary: 'Jane Cooper',
        secondary: 'jane@acme.com',
        trailing: <Badge variant="success">Active</Badge>,
      },
      {
        id: '2',
        primary: 'Cody Fisher',
        secondary: 'cody@acme.com',
        trailing: <Badge variant="warning">Pending</Badge>,
      },
      {
        id: '3',
        primary: 'Esther Howard',
        secondary: 'esther@acme.com',
        trailing: <Badge>Inactive</Badge>,
      },
    ],
  },
};

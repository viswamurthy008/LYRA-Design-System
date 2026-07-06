import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toolbar } from './Toolbar';
import { SearchField } from '../SearchField/SearchField';
import { Chip } from '../Chip/Chip';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

const meta: Meta<typeof Toolbar> = { title: 'Layout/Toolbar', component: Toolbar };
export default meta;
type Story = StoryObj<typeof Toolbar>;

export const FilterBar: Story = {
  render: () => (
    <div style={{ width: 640 }}>
      <Toolbar
        start={
          <>
            <div style={{ width: 220 }}>
              <SearchField placeholder="Search…" />
            </div>
            <Chip>Status: Active</Chip>
            <Chip>Role: Admin</Chip>
          </>
        }
        end={
          <>
            <Button variant="ghost" iconLeft={<Icon name="download" size={16} />}>
              Export
            </Button>
            <Button iconLeft={<Icon name="plus" size={16} />}>Add user</Button>
          </>
        }
      />
    </div>
  ),
};

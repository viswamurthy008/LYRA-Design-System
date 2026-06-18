import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sidebar } from './Sidebar';
import { Avatar } from '../Avatar/Avatar';

const meta: Meta<typeof Sidebar> = { title: 'Navigation/Sidebar', component: Sidebar };
export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => (
    <div style={{ height: 480, display: 'flex' }}>
      <Sidebar
        brand="Acme Inc."
        activeId="dashboard"
        items={[
          { id: 'dashboard', label: 'Dashboard' },
          { id: 'explore', label: 'Explore' },
          { id: 'calendar', label: 'Calendar' },
          { id: 'settings', label: 'Settings' },
        ]}
        footer={
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '8px' }}>
            <Avatar size="sm" initials="JC" />
            <span style={{ fontSize: 13 }}>Jane Cooper</span>
          </div>
        }
      />
    </div>
  ),
};

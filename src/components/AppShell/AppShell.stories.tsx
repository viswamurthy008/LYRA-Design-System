import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppShell } from './AppShell';
import { Sidebar } from '../Sidebar/Sidebar';
import { Navbar } from '../Navbar/Navbar';
import { StatCard } from '../StatCard/StatCard';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';

const meta: Meta<typeof AppShell> = {
  title: 'Patterns/Dashboard',
  component: AppShell,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof AppShell>;

export const Dashboard: Story = {
  render: () => (
    <div style={{ height: '100vh' }}>
      <AppShell
        sidebar={
          <Sidebar
            brand="Acme Inc."
            activeId="dashboard"
            items={[
              { id: 'dashboard', label: 'Dashboard' },
              { id: 'projects', label: 'Projects' },
              { id: 'team', label: 'Team' },
              { id: 'settings', label: 'Settings' },
            ]}
            footer={
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', padding: 8 }}>
                <Avatar size="sm" initials="JC" />
                <span style={{ fontSize: 13, fontFamily: 'Inter, sans-serif' }}>Jane Cooper</span>
              </div>
            }
          />
        }
        header={
          <Navbar
            brand=""
            activeId="overview"
            items={[
              { id: 'overview', label: 'Overview', href: '#' },
              { id: 'activity', label: 'Activity', href: '#' },
            ]}
            actions={
              <>
                <Button variant="primary" size="sm">
                  New
                </Button>
                <Avatar size="sm" initials="JC" />
              </>
            }
          />
        }
      >
        <h1
          style={{
            margin: '0 0 20px',
            fontFamily: 'Inter, sans-serif',
            fontSize: 24,
            color: 'var(--color-text-default)',
          }}
        >
          Dashboard
        </h1>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <StatCard
            label="Total Revenue"
            value="$48,250"
            delta="12.5%"
            deltaType="up"
            helper="vs last month"
          />
          <StatCard
            label="Active Users"
            value="2,340"
            delta="3.1%"
            deltaType="up"
            helper="vs last week"
          />
          <StatCard
            label="Churn"
            value="1.9%"
            delta="0.4%"
            deltaType="down"
            helper="vs last month"
          />
        </div>
      </AppShell>
    </div>
  ),
};

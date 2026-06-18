import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = { title: 'Navigation/Tabs', component: Tabs };
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('overview');
    return (
      <Tabs
        value={value}
        onChange={setValue}
        tabs={[
          { id: 'overview', label: 'Overview' },
          { id: 'activity', label: 'Activity' },
          { id: 'settings', label: 'Settings' },
        ]}
      />
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { SwitchGroup } from './SwitchGroup';

const meta: Meta<typeof SwitchGroup> = { title: 'Forms/SwitchGroup', component: SwitchGroup };
export default meta;
type Story = StoryObj<typeof SwitchGroup>;

export const Default: Story = {
  args: {
    items: [
      {
        id: 'email',
        label: 'Email notifications',
        description: 'Product news and updates',
        checked: true,
      },
      {
        id: 'sms',
        label: 'SMS notifications',
        description: 'Security alerts only',
        checked: false,
      },
      { id: 'push', label: 'Push notifications', checked: true, disabled: true },
    ],
  },
};

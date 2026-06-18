import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = { title: 'Navigation/Breadcrumb', component: Breadcrumb };
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [{ label: 'Home', href: '#' }, { label: 'Library', href: '#' }, { label: 'Components' }],
  },
};

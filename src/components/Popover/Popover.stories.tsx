import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover } from './Popover';
import { Button } from '../Button/Button';

const meta: Meta<typeof Popover> = { title: 'Feedback/Popover', component: Popover };
export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <div style={{ padding: 48 }}>
      <Popover trigger={<Button>Open popover</Button>}>
        <p style={{ margin: 0 }}>Popover content with richer details than a tooltip.</p>
      </Popover>
    </div>
  ),
};

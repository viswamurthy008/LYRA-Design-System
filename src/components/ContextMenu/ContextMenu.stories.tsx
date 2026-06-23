import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContextMenu } from './ContextMenu';

const meta: Meta<typeof ContextMenu> = { title: 'Overlays/ContextMenu', component: ContextMenu };
export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: () => (
    <ContextMenu
      items={[
        { id: 'open', label: 'Open' },
        { id: 'rename', label: 'Rename' },
        { id: 'duplicate', label: 'Duplicate' },
        { id: 'delete', label: 'Delete', danger: true },
      ]}
    >
      <div
        style={{
          width: 320,
          height: 160,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px dashed var(--color-border-strong)',
          borderRadius: 12,
          color: 'var(--color-text-subtle)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        Right-click anywhere in this area
      </div>
    </ContextMenu>
  ),
};

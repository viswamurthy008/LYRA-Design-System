import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';
import { ICON_NAMES } from './icon-paths';

const meta: Meta<typeof Icon> = { title: 'Utility/Icon', component: Icon };
export default meta;
type Story = StoryObj<typeof Icon>;

export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))',
        gap: 8,
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {ICON_NAMES.map((n) => (
        <div
          key={n}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            padding: 12,
            border: '1px solid var(--color-border-default)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <Icon name={n} />
          <span style={{ fontSize: 11, color: 'var(--color-text-subtle)' }}>{n}</span>
        </div>
      ))}
    </div>
  ),
};

export const SizesAndColor: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <Icon name="star" size={16} />
      <Icon name="star" size={24} />
      <Icon name="star" size={32} />
      <span style={{ color: 'var(--color-action-primary)' }}>
        <Icon name="star" size={32} title="Favorite" />
      </span>
    </div>
  ),
};

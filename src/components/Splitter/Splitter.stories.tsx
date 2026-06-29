import type { Meta, StoryObj } from '@storybook/react-vite';
import { Splitter } from './Splitter';

const meta: Meta<typeof Splitter> = { title: 'Layout/Splitter', component: Splitter };
export default meta;
type Story = StoryObj<typeof Splitter>;

const pane = (label: string) => (
  <div
    style={{
      padding: 24,
      height: '100%',
      boxSizing: 'border-box',
      background: 'var(--color-bg-default)',
      color: 'var(--color-text-default)',
      fontFamily: 'Inter, sans-serif',
    }}
  >
    {label}
  </div>
);

export const Default: Story = {
  render: () => (
    <div
      style={{
        height: 240,
        border: '1px solid var(--color-border-default)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
      }}
    >
      <Splitter start={pane('Sidebar — drag the divider →')} end={pane('Main content')} />
    </div>
  ),
};

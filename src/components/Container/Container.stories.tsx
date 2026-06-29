import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <div style={{ background: 'var(--color-bg-subtle)', padding: '24px 0' }}>
      <Container maxWidth={640}>
        <div
          style={{
            padding: 32,
            background: 'var(--color-bg-default)',
            border: '1px solid var(--color-border-default)',
            borderRadius: 'var(--radius-lg)',
            fontFamily: 'Inter, sans-serif',
            color: 'var(--color-text-default)',
          }}
        >
          Centered content, capped at 640px wide.
        </div>
      </Container>
    </div>
  ),
};

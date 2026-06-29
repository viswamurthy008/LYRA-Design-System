import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid } from './Grid';

const meta: Meta<typeof Grid> = { title: 'Layout/Grid', component: Grid };
export default meta;
type Story = StoryObj<typeof Grid>;

const cell = {
  padding: 24,
  background: 'var(--color-bg-brand-subtle)',
  borderRadius: 'var(--radius-md)',
  textAlign: 'center' as const,
  color: 'var(--color-text-brand)',
  fontFamily: 'Inter, sans-serif',
};

export const ThreeColumns: Story = {
  render: () => (
    <Grid columns={3} gap={16}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} style={cell}>
          {i + 1}
        </div>
      ))}
    </Grid>
  ),
};
export const Responsive: Story = {
  render: () => (
    <Grid minColWidth={120} gap={16}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} style={cell}>
          {i + 1}
        </div>
      ))}
    </Grid>
  ),
};

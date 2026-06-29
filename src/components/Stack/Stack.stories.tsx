import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from './Stack';

const meta: Meta<typeof Stack> = { title: 'Layout/Stack', component: Stack };
export default meta;
type Story = StoryObj<typeof Stack>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      padding: 16,
      background: 'var(--color-bg-brand-subtle)',
      borderRadius: 'var(--radius-md)',
      color: 'var(--color-text-brand)',
      fontFamily: 'Inter, sans-serif',
    }}
  >
    {children}
  </div>
);

export const Column: Story = {
  render: () => (
    <Stack gap={12}>
      <Box>One</Box>
      <Box>Two</Box>
      <Box>Three</Box>
    </Stack>
  ),
};
export const Row: Story = {
  render: () => (
    <Stack direction="row" gap={12}>
      <Box>One</Box>
      <Box>Two</Box>
      <Box>Three</Box>
    </Stack>
  ),
};

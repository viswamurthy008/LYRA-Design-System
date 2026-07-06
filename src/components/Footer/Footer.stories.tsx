import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => (
    <Footer
      brand="LYRA"
      columns={[
        {
          title: 'Product',
          links: [
            { label: 'Components', href: '#' },
            { label: 'Tokens', href: '#' },
            { label: 'Changelog', href: '#' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { label: 'Storybook', href: '#' },
            { label: 'GitHub', href: '#' },
            { label: 'Figma', href: '#' },
          ],
        },
      ]}
      legal="© 2026 LYRA Design System. All rights reserved."
    />
  ),
};

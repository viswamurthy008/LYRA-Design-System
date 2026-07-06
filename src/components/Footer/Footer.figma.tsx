import figma from '@figma/code-connect';
import { Footer } from './Footer';

// Figma "Footer" — node 84:361
figma.connect(Footer, '<DS_FILE>?node-id=84-361', {
  example: () => (
    <Footer
      brand="LYRA"
      columns={[
        {
          title: 'Product',
          links: [
            { label: 'Components', href: '/components' },
            { label: 'Tokens', href: '/tokens' },
          ],
        },
      ]}
      legal="© 2026 LYRA Design System."
    />
  ),
});

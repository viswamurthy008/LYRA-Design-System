import figma from '@figma/code-connect';
import { Breadcrumb } from './Breadcrumb';

// Figma "Breadcrumb" — node 9:593
figma.connect(Breadcrumb, '<DS_FILE>?node-id=9-593', {
  example: () => (
    <Breadcrumb
      items={[
        { label: 'Home', href: '#' },
        { label: 'Library', href: '#' },
        { label: 'Components' },
      ]}
    />
  ),
});

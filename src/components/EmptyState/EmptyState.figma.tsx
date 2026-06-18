import figma from '@figma/code-connect';
import { EmptyState } from './EmptyState';

// Figma "Empty State" — node 28:617
figma.connect(EmptyState, '<DS_FILE>?node-id=28-617', {
  example: () => (
    <EmptyState title="Nothing here yet" description="Get started by creating an item." />
  ),
});

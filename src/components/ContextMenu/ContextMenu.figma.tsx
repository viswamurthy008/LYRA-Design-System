import figma from '@figma/code-connect';
import { ContextMenu } from './ContextMenu';

// Figma "Context Menu" — node 58:270
figma.connect(ContextMenu, '<DS_FILE>?node-id=58-270', {
  example: () => (
    <ContextMenu
      items={[
        { id: 'open', label: 'Open', onSelect: () => {} },
        { id: 'rename', label: 'Rename', onSelect: () => {} },
        { id: 'duplicate', label: 'Duplicate', onSelect: () => {} },
        { id: 'delete', label: 'Delete', danger: true, onSelect: () => {} },
      ]}
    >
      <div>Right-click me</div>
    </ContextMenu>
  ),
});

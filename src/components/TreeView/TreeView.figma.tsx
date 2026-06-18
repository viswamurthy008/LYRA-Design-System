import figma from '@figma/code-connect';
import { TreeView } from './TreeView';

// Figma "Tree View" — node 28:804
figma.connect(TreeView, '<DS_FILE>?node-id=28-804', {
  example: () => (
    <TreeView
      defaultExpanded={['root']}
      nodes={[{ id: 'root', label: 'Folder', children: [{ id: 'child', label: 'File' }] }]}
    />
  ),
});

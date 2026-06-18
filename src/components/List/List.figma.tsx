import figma from '@figma/code-connect';
import { List } from './List';

// Figma "List" — node 28:699
figma.connect(List, '<DS_FILE>?node-id=28-699', {
  example: () => <List items={[{ id: '1', primary: 'Item', secondary: 'Supporting text' }]} />,
});

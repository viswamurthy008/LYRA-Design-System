import figma from '@figma/code-connect';
import { Toolbar } from './Toolbar';
import { SearchField } from '../SearchField/SearchField';
import { Button } from '../Button/Button';

// Figma "Toolbar" — node 84:345
figma.connect(Toolbar, '<DS_FILE>?node-id=84-345', {
  example: () => (
    <Toolbar start={<SearchField placeholder="Search…" />} end={<Button>Add user</Button>} />
  ),
});

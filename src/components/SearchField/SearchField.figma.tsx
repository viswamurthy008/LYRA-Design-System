import figma from '@figma/code-connect';
import { SearchField } from './SearchField';

// Figma "Search Field" component set — node 27:225
figma.connect(SearchField, '<DS_FILE>?node-id=27-225', {
  example: () => <SearchField label="Search" placeholder="Search…" />,
});

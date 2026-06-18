import figma from '@figma/code-connect';
import { Pagination } from './Pagination';

// Figma "Pagination" — node 23:157
figma.connect(Pagination, '<DS_FILE>?node-id=23-157', {
  example: () => <Pagination page={3} pageCount={5} />,
});

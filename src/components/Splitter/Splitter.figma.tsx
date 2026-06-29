import figma from '@figma/code-connect';
import { Splitter } from './Splitter';

// Figma "Splitter" — node 65:308
figma.connect(Splitter, '<DS_FILE>?node-id=65-308', {
  example: () => (
    <Splitter defaultSplit={40} start={<div>Sidebar</div>} end={<div>Main content</div>} />
  ),
});

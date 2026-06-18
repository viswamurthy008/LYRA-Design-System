import figma from '@figma/code-connect';
import { Link } from './Link';

// Figma "Link" — node 28:506
figma.connect(Link, '<DS_FILE>?node-id=28-506', {
  example: () => <Link href="#">Link text</Link>,
});

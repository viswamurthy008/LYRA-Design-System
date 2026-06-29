import figma from '@figma/code-connect';
import { FileUpload } from './FileUpload';

// Figma "File Upload" — node 65:319
figma.connect(FileUpload, '<DS_FILE>?node-id=65-319', {
  example: () => <FileUpload accept="image/*,.pdf" />,
});

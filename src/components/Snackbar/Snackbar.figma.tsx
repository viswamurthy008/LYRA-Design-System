import figma from '@figma/code-connect';
import { Snackbar } from './Snackbar';

// Figma "Snackbar" — node 28:648
figma.connect(Snackbar, '<DS_FILE>?node-id=28-648', {
  example: () => <Snackbar message="Message archived" actionLabel="Undo" onAction={() => {}} />,
});

import figma from '@figma/code-connect';
import { DatePicker } from './DatePicker';

// Figma "Date Picker" — node 28:845
figma.connect(DatePicker, '<DS_FILE>?node-id=28-845', {
  example: () => <DatePicker value={new Date()} />,
});

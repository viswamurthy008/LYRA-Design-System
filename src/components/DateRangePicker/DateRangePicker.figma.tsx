import figma from '@figma/code-connect';
import { DateRangePicker } from './DateRangePicker';

// Figma "Date Range Picker" — node 58:283
figma.connect(DateRangePicker, '<DS_FILE>?node-id=58-283', {
  example: () => <DateRangePicker value={{ start: new Date(), end: new Date() }} />,
});

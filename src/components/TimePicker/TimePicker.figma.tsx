import figma from '@figma/code-connect';
import { TimePicker } from './TimePicker';

// Figma "Time Picker" — node 28:966
figma.connect(TimePicker, '<DS_FILE>?node-id=28-966', {
  example: () => <TimePicker value={{ hour: '10', minute: '30', period: 'AM' }} />,
});

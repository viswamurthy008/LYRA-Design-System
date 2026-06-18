import figma from '@figma/code-connect';
import { Combobox } from './Combobox';

// Figma "Combobox" component set — node 28:391
figma.connect(Combobox, '<DS_FILE>?node-id=28-391', {
  example: () => <Combobox label="Fruit" options={[{ value: 'apple', label: 'Apple' }]} />,
});

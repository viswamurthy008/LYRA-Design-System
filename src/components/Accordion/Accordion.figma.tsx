import figma from '@figma/code-connect';
import { Accordion } from './Accordion';

// Figma "Accordion" — node 23:192
figma.connect(Accordion, '<DS_FILE>?node-id=23-192', {
  example: () => (
    <Accordion defaultOpen={['a']} items={[{ id: 'a', title: 'Question', content: 'Answer' }]} />
  ),
});

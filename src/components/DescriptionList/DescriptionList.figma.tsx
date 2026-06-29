import figma from '@figma/code-connect';
import { DescriptionList } from './DescriptionList';

// Figma "Description List" — node 64:242
figma.connect(DescriptionList, '<DS_FILE>?node-id=64-242', {
  example: () => (
    <DescriptionList
      items={[
        { term: 'Plan', description: 'Starter' },
        { term: 'Seats', description: '12 of 20' },
        { term: 'Renews', description: 'Jul 1, 2026' },
      ]}
    />
  ),
});

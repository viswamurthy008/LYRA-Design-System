import figma from '@figma/code-connect';
import { Card } from './Card';

// Figma "Card" component set — node 9:82
figma.connect(Card, '<DS_FILE>?node-id=9-82', {
  props: {
    variant: figma.enum('Style', { Default: 'default', Elevated: 'elevated' }),
    title: figma.string('Title'),
    body: figma.string('Body'),
    ctaLabel: figma.string('CTA Label'),
  },
  example: ({ variant, title, body, ctaLabel }) => (
    <Card variant={variant} title={title} body={body} ctaLabel={ctaLabel} />
  ),
});

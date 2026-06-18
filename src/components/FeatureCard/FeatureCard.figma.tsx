import figma from '@figma/code-connect';
import { FeatureCard } from './FeatureCard';

// Figma "Card / Feature" — node 23:324
figma.connect(FeatureCard, '<DS_FILE>?node-id=23-324', {
  example: () => <FeatureCard title="Feature" description="A short description of the feature." />,
});

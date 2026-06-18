import figma from '@figma/code-connect';
import { StatCard } from './StatCard';

// Figma "Card / Stat" — node 23:318
figma.connect(StatCard, '<DS_FILE>?node-id=23-318', {
  example: () => (
    <StatCard
      label="Total Revenue"
      value="$48,250"
      delta="12.5%"
      deltaType="up"
      helper="vs last month"
    />
  ),
});

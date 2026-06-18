import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = { title: 'Navigation/Accordion', component: Accordion };
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 480 }}>
      <Accordion
        defaultOpen={['a']}
        items={[
          {
            id: 'a',
            title: 'What is included?',
            content: 'All components, foundation tokens, and the icon set.',
          },
          {
            id: 'b',
            title: 'Can I customize it?',
            content: 'Yes — every component is token-driven.',
          },
          { id: 'c', title: 'How do I get updates?', content: 'Pull the latest package version.' },
        ]}
      />
    </div>
  ),
};

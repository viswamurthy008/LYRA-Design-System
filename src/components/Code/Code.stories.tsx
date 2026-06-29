import type { Meta, StoryObj } from '@storybook/react-vite';
import { Code } from './Code';

const meta: Meta<typeof Code> = { title: 'Utility/Code', component: Code };
export default meta;
type Story = StoryObj<typeof Code>;

export const Inline: Story = { args: { children: 'npm install lyra-design-system' } };
export const Block: Story = {
  args: {
    block: true,
    language: 'tsx',
    children: `import { Button } from 'lyra-design-system';\n\nexport const App = () => <Button>Click</Button>;`,
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { TreeView } from './TreeView';

const meta: Meta<typeof TreeView> = { title: 'Navigation/TreeView', component: TreeView };
export default meta;
type Story = StoryObj<typeof TreeView>;

export const Default: Story = {
  args: {
    defaultExpanded: ['src'],
    nodes: [
      {
        id: 'src',
        label: 'src',
        children: [
          {
            id: 'components',
            label: 'components',
            children: [{ id: 'button', label: 'Button.tsx' }],
          },
          { id: 'index', label: 'index.ts' },
        ],
      },
      { id: 'readme', label: 'README.md' },
    ],
  },
};

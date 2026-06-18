import type { Meta, StoryObj } from '@storybook/react-vite';
import { Combobox } from './Combobox';

const meta: Meta<typeof Combobox> = { title: 'Forms/Combobox', component: Combobox };
export default meta;
type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  args: {
    label: 'Fruit',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'apricot', label: 'Apricot' },
      { value: 'banana', label: 'Banana' },
    ],
  },
};

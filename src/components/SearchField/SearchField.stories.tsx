import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchField } from './SearchField';

const meta: Meta<typeof SearchField> = { title: 'Forms/SearchField', component: SearchField };
export default meta;
type Story = StoryObj<typeof SearchField>;

export const Empty: Story = { args: { label: 'Search', placeholder: 'Search projects…' } };
export const WithValue: Story = { args: { label: 'Search', value: 'design', onClear: () => {} } };

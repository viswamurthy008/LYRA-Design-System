import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormField } from './FormField';
import { Input } from '../Input/Input';

const meta: Meta<typeof FormField> = { title: 'Forms/FormField', component: FormField };
export default meta;
type Story = StoryObj<typeof FormField>;

export const WithHint: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <FormField label="Email" hint="We'll never share it." required>
        <Input placeholder="you@example.com" />
      </FormField>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <FormField label="Email" error="Enter a valid email address." required>
        <Input placeholder="you@example.com" />
      </FormField>
    </div>
  ),
};

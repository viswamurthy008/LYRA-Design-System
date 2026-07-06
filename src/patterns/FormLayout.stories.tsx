import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Card } from '../components/Card/Card';
import { FormField } from '../components/FormField/FormField';
import { Input } from '../components/Input/Input';
import { Select } from '../components/Select/Select';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Button } from '../components/Button/Button';
import { Stack } from '../components/Stack/Stack';

const meta: Meta = {
  title: 'Patterns/Form Layout',
  parameters: {
    docs: {
      description: {
        component:
          'Standard settings form: FormField wraps each control (labels, hints, errors, ARIA wiring), actions right-aligned, destructive action separated. Validation errors appear inline next to the field — never as a toast.',
      },
    },
  },
};
export default meta;
type Story = StoryObj;

export const SettingsForm: Story = {
  render: () => {
    const [email, setEmail] = useState('viswa@example');
    const emailError = /.+@.+\..+/.test(email) ? undefined : 'Enter a valid email address.';
    return (
      <div style={{ width: 480 }}>
        <Card>
          <Stack gap={20}>
            <FormField label="Full name" required>
              <Input placeholder="Jane Cooper" />
            </FormField>
            <FormField
              label="Email"
              error={emailError}
              hint="Used for sign-in and receipts."
              required
            >
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormField>
            <FormField label="Team" hint="You can change this later.">
              <Select
                options={[
                  { value: 'design', label: 'Design' },
                  { value: 'eng', label: 'Engineering' },
                ]}
                placeholder="Choose a team"
              />
            </FormField>
            <Checkbox label="Email me product updates" />
            <Stack direction="row" gap={8} justify="flex-end">
              <Button variant="secondary">Cancel</Button>
              <Button disabled={!!emailError}>Save changes</Button>
            </Stack>
          </Stack>
        </Card>
      </div>
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Tour } from './Tour';
import { Button } from '../Button/Button';

const meta: Meta<typeof Tour> = { title: 'Overlays/Tour', component: Tour };
export default meta;
type Story = StoryObj<typeof Tour>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: 40, display: 'flex', gap: 16, alignItems: 'center' }}>
        <Button id="tour-start" onClick={() => setOpen(true)}>
          Start tour
        </Button>
        <span
          id="tour-search"
          style={{
            padding: '8px 16px',
            border: '1px solid var(--color-border-default)',
            borderRadius: 'var(--radius-md)',
            fontFamily: 'Inter, sans-serif',
            color: 'var(--color-text-subtle)',
          }}
        >
          Search…
        </span>
        <Tour
          open={open}
          onClose={() => setOpen(false)}
          steps={[
            {
              target: '#tour-start',
              title: 'Start here',
              content: 'This button kicks things off.',
            },
            { target: '#tour-search', title: 'Find anything', content: 'Search across the app.' },
          ]}
        />
      </div>
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Tour } from '../components/Tour/Tour';
import { Button } from '../components/Button/Button';
import { Metric } from '../components/Metric/Metric';
import { Stack } from '../components/Stack/Stack';

const meta: Meta = {
  title: 'Patterns/Onboarding',
  parameters: {
    docs: {
      description: {
        component:
          'First-run onboarding: a short Tour (2–4 steps max) spotlighting the primary action first. Always skippable; finish where the user can act immediately.',
      },
    },
  },
};
export default meta;
type Story = StoryObj;

export const FirstRunTour: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: 24 }}>
        <Stack gap={16}>
          <Stack direction="row" gap={8}>
            <Button id="onb-new" onClick={() => setOpen(true)}>
              New report
            </Button>
            <Button id="onb-invite" variant="secondary">
              Invite team
            </Button>
          </Stack>
          <div id="onb-metric" style={{ width: 240 }}>
            <Metric label="Revenue" value="$48.2k" delta={12.5} sparkline={[4, 6, 5, 8, 7, 11]} />
          </div>
          <Tour
            open={open}
            onClose={() => setOpen(false)}
            steps={[
              {
                target: '#onb-new',
                title: 'Create your first report',
                content: 'Everything starts here — reports update live as data arrives.',
              },
              {
                target: '#onb-metric',
                title: 'Watch the trend',
                content: 'KPI tiles show the delta against the previous period.',
              },
              {
                target: '#onb-invite',
                title: 'Bring the team',
                content: 'Reports are better shared. Invite a teammate to finish setup.',
              },
            ]}
          />
        </Stack>
      </div>
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { SearchField } from '../components/SearchField/SearchField';
import { EmptyState } from '../components/EmptyState/EmptyState';
import { Spinner } from '../components/Spinner/Spinner';
import { Button } from '../components/Button/Button';
import { Stack } from '../components/Stack/Stack';
import { DescriptionList } from '../components/DescriptionList/DescriptionList';

const meta: Meta = {
  title: 'Patterns/Search & States',
  parameters: {
    docs: {
      description: {
        component:
          'The three states every search/list surface must handle: loading (Spinner or Skeleton), results, and empty (EmptyState with a recovery action — never a bare "No results" string).',
      },
    },
  },
};
export default meta;
type Story = StoryObj;

const DATA = [
  { term: 'Design System — MVP', description: 'Figma library · 90 components' },
  { term: 'lyra-design-system', description: 'React library · v1.7' },
  { term: 'Storybook', description: 'Docs site · GitHub Pages' },
];

export const AllStates: Story = {
  render: () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const results = DATA.filter((d) => d.term.toLowerCase().includes(query.toLowerCase()));
    const search = (q: string) => {
      setQuery(q);
      setLoading(true);
      window.setTimeout(() => setLoading(false), 400);
    };
    return (
      <div style={{ width: 440 }}>
        <Stack gap={16}>
          <SearchField
            label="Find a project"
            value={query}
            placeholder="Search projects…"
            onChange={(e) => search(e.target.value)}
            onClear={() => search('')}
          />
          {loading ? (
            <Stack align="center" gap={8}>
              <Spinner />
            </Stack>
          ) : results.length > 0 ? (
            <DescriptionList items={results} />
          ) : (
            <EmptyState
              icon="🔍"
              title="No projects found"
              description={`Nothing matches “${query}”. Try a different term or clear the search.`}
              action={
                <Button variant="secondary" onClick={() => search('')}>
                  Clear search
                </Button>
              }
            />
          )}
        </Stack>
      </div>
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataTable } from './DataTable';
import { Badge } from '../Badge/Badge';

type Row = { name: string; email: string; role: string; status: string };

// DataTable is generic; use an untyped meta to avoid generic-in-typeof issues.
const meta: Meta = { title: 'Data Display/DataTable' };
export default meta;

const data: Row[] = [
  { name: 'Jane Cooper', email: 'jane@acme.com', role: 'Admin', status: 'Active' },
  { name: 'Cody Fisher', email: 'cody@acme.com', role: 'Editor', status: 'Pending' },
  { name: 'Esther Howard', email: 'esther@acme.com', role: 'Viewer', status: 'Inactive' },
];

export const Default: StoryObj = {
  render: () => (
    <DataTable<Row>
      data={data}
      getRowId={(r) => r.email}
      columns={[
        { key: 'name', header: 'Name', sortable: true },
        { key: 'email', header: 'Email' },
        { key: 'role', header: 'Role', sortable: true },
        {
          key: 'status',
          header: 'Status',
          render: (r) => (
            <Badge
              variant={
                r.status === 'Active' ? 'success' : r.status === 'Pending' ? 'warning' : 'default'
              }
            >
              {r.status}
            </Badge>
          ),
        },
      ]}
    />
  ),
};

import figma from '@figma/code-connect';
import { DataTable } from './DataTable';

// Figma "Data Table" — node 23:468
figma.connect(DataTable, '<DS_FILE>?node-id=23-468', {
  example: () => (
    <DataTable
      data={[{ name: 'Jane Cooper', email: 'jane@acme.com' }]}
      columns={[
        { key: 'name', header: 'Name' },
        { key: 'email', header: 'Email' },
      ]}
    />
  ),
});

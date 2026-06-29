import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileUpload } from './FileUpload';

const meta: Meta<typeof FileUpload> = { title: 'Forms/FileUpload', component: FileUpload };
export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 380 }}>
      <FileUpload />
    </div>
  ),
};

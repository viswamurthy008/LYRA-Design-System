import type { Meta, StoryObj } from '@storybook/react-vite';
import { Carousel } from './Carousel';

const meta: Meta<typeof Carousel> = { title: 'Data Display/Carousel', component: Carousel };
export default meta;
type Story = StoryObj<typeof Carousel>;

const slide = (bg: string, label: string) => (
  <div
    style={{
      height: 260,
      background: bg,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 24,
      fontWeight: 700,
    }}
  >
    {label}
  </div>
);

export const Default: Story = {
  render: () => (
    <div style={{ width: 480 }}>
      <Carousel
        slides={[slide('#3B82F6', 'One'), slide('#22C55E', 'Two'), slide('#EF4444', 'Three')]}
      />
    </div>
  ),
};

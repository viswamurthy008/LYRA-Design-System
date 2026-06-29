import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sparkline } from './Sparkline';

const meta: Meta<typeof Sparkline> = { title: 'Charts/Sparkline', component: Sparkline };
export default meta;
type Story = StoryObj<typeof Sparkline>;

const data = [4, 6, 5, 8, 7, 11, 9, 13, 12, 16];

export const Line: Story = { args: { data } };
export const Area: Story = { args: { data, area: true, width: 160, height: 44 } };

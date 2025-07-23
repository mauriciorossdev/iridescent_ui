import type { Meta, StoryObj } from '@storybook/react';
import { ShadowDemo } from './ShadowDemo';

const meta: Meta<typeof ShadowDemo> = {
  title: 'Components/ShadowDemo',
  component: ShadowDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Demostración del efecto de sombra dinámica que responde al acelerómetro del dispositivo. Inclina tu dispositivo para ver cómo la sombra se mueve siguiendo la gravedad.',
      },
    },
  },
}; 
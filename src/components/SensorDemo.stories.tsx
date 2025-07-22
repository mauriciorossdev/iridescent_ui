import type { Meta, StoryObj } from '@storybook/react';
import { SensorDemo } from './SensorDemo';

const meta: Meta<typeof SensorDemo> = {
  title: 'Components/SensorDemo',
  component: SensorDemo,
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
        story: 'Componente de demostración que muestra todos los datos de los sensores móviles en tiempo real. Abre esto en un dispositivo móvil para ver los efectos completos.',
      },
    },
  },
}; 
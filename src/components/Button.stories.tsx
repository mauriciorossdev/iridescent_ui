import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    enableSensors: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Botón Primario',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Botón Secundario',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Botón Outline',
    variant: 'outline',
  },
};

export const Small: Story = {
  args: {
    children: 'Botón Pequeño',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'Botón Grande',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Botón Deshabilitado',
    disabled: true,
  },
};

export const WithClick: Story = {
  args: {
    children: 'Haz clic aquí',
    onClick: () => alert('¡Botón clickeado!'),
  },
};

export const WithSensors: Story = {
  args: {
    children: 'Botón con Sensores',
    enableSensors: true,
    onMotion: () => console.log('¡Movimiento detectado!'),
    onTilt: (tilt) => console.log('Inclinación:', tilt),
    onProximity: (isNear) => console.log('Proximidad:', isNear ? 'Cerca' : 'Lejos'),
    onLightChange: (level) => console.log('Nivel de luz:', level),
  },
  parameters: {
    docs: {
      description: {
        story: 'Este botón interactúa con los sensores del dispositivo móvil. Mueve tu dispositivo, inclínalo, acércalo o cambia la iluminación para ver los efectos.',
      },
    },
  },
};

export const SensorDemo: Story = {
  args: {
    children: 'Demo Sensores',
    enableSensors: true,
    variant: 'primary',
    size: 'large',
  },
  parameters: {
    docs: {
      description: {
        story: 'Demostración completa de todas las funcionalidades de sensores. Abre esto en un dispositivo móvil para ver los efectos.',
      },
    },
  },
};

export const ShadowEffect: Story = {
  args: {
    children: 'Botón con Sombra Dinámica',
    enableSensors: true,
    variant: 'primary',
    size: 'large',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón con efecto de sombra dinámica que responde al acelerómetro. La sombra se mueve según la inclinación del dispositivo, simulando una fuente de luz real.',
      },
    },
  },
}; 
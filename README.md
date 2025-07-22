# 🌈 Iridescent UI

Una biblioteca de componentes React moderna que interactúa con sensores de dispositivos móviles para crear experiencias web inmersivas e interactivas.

## ✨ Características

- 📱 **Sensores Móviles**: Acelerómetro, giroscopio, orientación, proximidad y luz ambiental
- 🎨 **Componentes Interactivos**: Botones y elementos que responden al movimiento del dispositivo
- 📖 **Storybook**: Documentación interactiva con ejemplos en tiempo real
- 🎯 **TypeScript**: Tipado completo para mejor desarrollo
- 🎨 **Tailwind CSS**: Estilos modernos y responsivos
- 🚀 **Despliegue Fácil**: Configuración para múltiples plataformas

## 🚀 Inicio Rápido

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/iridescent-ui.git
cd iridescent-ui

# Instalar dependencias
npm install

# Iniciar Storybook
npm run storybook
```

### Uso Básico

```tsx
import { Button } from './components/Button';

function App() {
  return (
    <Button
      enableSensors={true}
      onMotion={() => console.log('¡Movimiento detectado!')}
      onTilt={(tilt) => console.log('Inclinación:', tilt)}
    >
      Botón Interactivo
    </Button>
  );
}
```

## 📱 Sensores Soportados

| Sensor | API | Uso | Compatibilidad |
|--------|-----|-----|----------------|
| 📱 Acelerómetro | `Accelerometer` | Movimiento, vibración | Chrome 67+, Safari 13+ |
| 🔄 Giroscopio | `Gyroscope` | Rotación angular | Chrome 67+, Safari 13+ |
| 📐 Orientación | `DeviceOrientationEvent` | Inclinación | Amplia compatibilidad |
| 👁️ Proximidad | `ProximitySensor` | Objetos cercanos | Chrome 67+, Firefox 60+ |
| 💡 Luz Ambiental | `AmbientLightSensor` | Nivel de iluminación | Chrome 67+, Firefox 60+ |

## 🎨 Componentes

### Button
Botón interactivo que responde a sensores móviles:

```tsx
<Button
  enableSensors={true}
  variant="primary"
  size="large"
  onMotion={() => playSound()}
  onTilt={(tilt) => adjustVolume(tilt.x)}
  onProximity={(isNear) => toggleFullscreen(isNear)}
>
  Botón Sensorial
</Button>
```

### SensorDemo
Componente de demostración completa:

```tsx
import { SensorDemo } from './components/SensorDemo';

function App() {
  return <SensorDemo />;
}
```

## 🛠️ Desarrollo

### Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Iniciar Vite dev server
npm run storybook        # Iniciar Storybook
npm run build            # Build de la aplicación
npm run build-storybook  # Build de Storybook

# Despliegue
npm run deploy           # Deploy a GitHub Pages
./scripts/deploy.sh      # Deploy automatizado
```

### Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Button.tsx      # Botón con sensores
│   ├── SensorDemo.tsx  # Demo de sensores
│   └── *.stories.tsx   # Stories de Storybook
├── hooks/              # Hooks personalizados
│   └── useMobileSensors.ts
└── types/              # Declaraciones de tipos
    └── sensors.d.ts
```

## 🌐 Despliegue

### GitHub Pages (Recomendado)

```bash
# Despliegue automático
npm run deploy

# O usar el script
./scripts/deploy.sh github
```

### Otras Plataformas

```bash
# Vercel
./scripts/deploy.sh vercel

# Netlify
./scripts/deploy.sh netlify

# Firebase
./scripts/deploy.sh firebase
```

## 📖 Documentación

- [📱 Guía de Sensores](./SENSORS.md) - Uso detallado de sensores móviles
- [🚀 Guía de Despliegue](./DEPLOYMENT.md) - Opciones de despliegue
- [📖 Storybook](http://localhost:6006) - Documentación interactiva

## 🔧 Configuración

### Variables de Entorno

```env
VITE_APP_URL=https://tu-dominio.com
VITE_ENABLE_SENSORS=true
```

### TypeScript

El proyecto incluye tipos completos para las APIs de sensores:

```tsx
import { useMobileSensors } from './hooks/useMobileSensors';

const sensors = useMobileSensors({
  enableAccelerometer: true,
  enableOrientation: true,
  threshold: 0.5
});
```

## 🧪 Testing

### Pruebas en Dispositivos Móviles

1. **Chrome DevTools**: F12 > Device Toolbar > Sensors
2. **Firefox DevTools**: F12 > Responsive Design Mode
3. **Dispositivo Real**: Escanea el QR de tu URL desplegada

### Checklist de Testing

- [ ] HTTPS funciona correctamente
- [ ] Permisos de sensores se solicitan
- [ ] Sensores responden en dispositivos móviles
- [ ] Fallbacks funcionan en navegadores sin soporte
- [ ] Performance es aceptable

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [Web.dev](https://web.dev/sensors-for-the-web/) - Documentación de sensores web
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs) - APIs de sensores
- [Storybook](https://storybook.js.org/) - Documentación de componentes

---

⭐ Si este proyecto te ayuda, ¡dale una estrella!

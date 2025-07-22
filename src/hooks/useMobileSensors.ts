import { useState, useEffect, useCallback } from 'react';

interface SensorData {
  acceleration: {
    x: number | null;
    y: number | null;
    z: number | null;
  };
  orientation: {
    alpha: number | null;
    beta: number | null;
    gamma: number | null;
  };
  gyroscope: {
    x: number | null;
    y: number | null;
    z: number | null;
  };
  proximity: number | null;
  light: number | null;
}

interface UseMobileSensorsOptions {
  enableAccelerometer?: boolean;
  enableGyroscope?: boolean;
  enableOrientation?: boolean;
  enableProximity?: boolean;
  enableLight?: boolean;
  threshold?: number;
}

export const useMobileSensors = (options: UseMobileSensorsOptions = {}) => {
  const {
    enableAccelerometer = true,
    enableGyroscope = true,
    enableOrientation = true,
    enableProximity = false,
    enableLight = false,
    threshold = 0.1
  } = options;

  const [sensorData, setSensorData] = useState<SensorData>({
    acceleration: { x: null, y: null, z: null },
    orientation: { alpha: null, beta: null, gamma: null },
    gyroscope: { x: null, y: null, z: null },
    proximity: null,
    light: null
  });

  const [isSupported, setIsSupported] = useState({
    accelerometer: false,
    gyroscope: false,
    orientation: false,
    proximity: false,
    light: false
  });

  const [isActive, setIsActive] = useState(false);

  // Detectar sensores disponibles
  useEffect(() => {
    const checkSensors = () => {
      setIsSupported({
        accelerometer: 'Accelerometer' in window,
        gyroscope: 'Gyroscope' in window,
        orientation: 'DeviceOrientationEvent' in window,
        proximity: 'ProximitySensor' in window,
        light: 'AmbientLightSensor' in window
      });
    };

    checkSensors();
  }, []);

  // Acelerómetro
  useEffect(() => {
    if (!enableAccelerometer || !isSupported.accelerometer) return;

    let accelerometer: Accelerometer | null = null;

    const startAccelerometer = async () => {
      try {
        if ('Accelerometer' in window) {
          accelerometer = new Accelerometer({ frequency: 60 });
          
          accelerometer.addEventListener('reading', () => {
            setSensorData(prev => ({
              ...prev,
              acceleration: {
                x: accelerometer!.x,
                y: accelerometer!.y,
                z: accelerometer!.z
              }
            }));
          });

          accelerometer.start();
        }
      } catch (error) {
        console.warn('Acelerómetro no disponible:', error);
      }
    };

    startAccelerometer();

    return () => {
      if (accelerometer) {
        accelerometer.stop();
      }
    };
  }, [enableAccelerometer, isSupported.accelerometer]);

  // Giroscopio
  useEffect(() => {
    if (!enableGyroscope || !isSupported.gyroscope) return;

    let gyroscope: Gyroscope | null = null;

    const startGyroscope = async () => {
      try {
        if ('Gyroscope' in window) {
          gyroscope = new Gyroscope({ frequency: 60 });
          
          gyroscope.addEventListener('reading', () => {
            setSensorData(prev => ({
              ...prev,
              gyroscope: {
                x: gyroscope!.x,
                y: gyroscope!.y,
                z: gyroscope!.z
              }
            }));
          });

          gyroscope.start();
        }
      } catch (error) {
        console.warn('Giroscopio no disponible:', error);
      }
    };

    startGyroscope();

    return () => {
      if (gyroscope) {
        gyroscope.stop();
      }
    };
  }, [enableGyroscope, isSupported.gyroscope]);

  // Orientación del dispositivo
  useEffect(() => {
    if (!enableOrientation || !isSupported.orientation) return;

    const handleOrientation = (event: DeviceOrientationEvent) => {
      setSensorData(prev => ({
        ...prev,
        orientation: {
          alpha: event.alpha,
          beta: event.beta,
          gamma: event.gamma
        }
      }));
    };

    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, [enableOrientation, isSupported.orientation]);

  // Sensor de proximidad
  useEffect(() => {
    if (!enableProximity || !isSupported.proximity) return;

    let proximitySensor: ProximitySensor | null = null;

    const startProximitySensor = async () => {
      try {
        if ('ProximitySensor' in window) {
          proximitySensor = new ProximitySensor();
          
          proximitySensor.addEventListener('reading', () => {
            setSensorData(prev => ({
              ...prev,
              proximity: proximitySensor!.distance
            }));
          });

          proximitySensor.start();
        }
      } catch (error) {
        console.warn('Sensor de proximidad no disponible:', error);
      }
    };

    startProximitySensor();

    return () => {
      if (proximitySensor) {
        proximitySensor.stop();
      }
    };
  }, [enableProximity, isSupported.proximity]);

  // Sensor de luz ambiental
  useEffect(() => {
    if (!enableLight || !isSupported.light) return;

    let lightSensor: AmbientLightSensor | null = null;

    const startLightSensor = async () => {
      try {
        if ('AmbientLightSensor' in window) {
          lightSensor = new AmbientLightSensor();
          
          lightSensor.addEventListener('reading', () => {
            setSensorData(prev => ({
              ...prev,
              light: lightSensor!.illuminance
            }));
          });

          lightSensor.start();
        }
      } catch (error) {
        console.warn('Sensor de luz no disponible:', error);
      }
    };

    startLightSensor();

    return () => {
      if (lightSensor) {
        lightSensor.stop();
      }
    };
  }, [enableLight, isSupported.light]);

  // Detectar movimiento significativo
  const detectMotion = useCallback(() => {
    const { acceleration } = sensorData;
    if (acceleration.x === null || acceleration.y === null || acceleration.z === null) {
      return false;
    }

    const magnitude = Math.sqrt(
      Math.pow(acceleration.x, 2) + 
      Math.pow(acceleration.y, 2) + 
      Math.pow(acceleration.z, 2)
    );

    return magnitude > threshold;
  }, [sensorData, threshold]);

  // Detectar inclinación
  const detectTilt = useCallback(() => {
    const { orientation } = sensorData;
    if (orientation.beta === null || orientation.gamma === null) {
      return { x: 0, y: 0 };
    }

    return {
      x: orientation.gamma, // Inclinación izquierda-derecha
      y: orientation.beta   // Inclinación adelante-atrás
    };
  }, [sensorData]);

  // Detectar proximidad
  const isNear = useCallback(() => {
    return sensorData.proximity !== null && sensorData.proximity < 5; // 5cm
  }, [sensorData.proximity]);

  // Detectar nivel de luz
  const getLightLevel = useCallback(() => {
    if (sensorData.light === null) return 'unknown';
    if (sensorData.light < 10) return 'dark';
    if (sensorData.light < 100) return 'dim';
    if (sensorData.light < 1000) return 'normal';
    return 'bright';
  }, [sensorData.light]);

  return {
    sensorData,
    isSupported,
    isActive,
    detectMotion,
    detectTilt,
    isNear,
    getLightLevel,
    start: () => setIsActive(true),
    stop: () => setIsActive(false)
  };
}; 
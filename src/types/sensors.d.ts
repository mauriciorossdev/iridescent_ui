// Declaraciones de tipos para APIs de sensores móviles

declare class Accelerometer extends EventTarget {
  constructor(options?: { frequency?: number });
  start(): void;
  stop(): void;
  readonly x: number | null;
  readonly y: number | null;
  readonly z: number | null;
}

declare class Gyroscope extends EventTarget {
  constructor(options?: { frequency?: number });
  start(): void;
  stop(): void;
  readonly x: number | null;
  readonly y: number | null;
  readonly z: number | null;
}

declare class ProximitySensor extends EventTarget {
  constructor();
  start(): void;
  stop(): void;
  readonly distance: number | null;
}

declare class AmbientLightSensor extends EventTarget {
  constructor();
  start(): void;
  stop(): void;
  readonly illuminance: number | null;
}

interface DeviceOrientationEvent extends Event {
  readonly alpha: number | null;
  readonly beta: number | null;
  readonly gamma: number | null;
}

declare global {
  interface Window {
    Accelerometer: typeof Accelerometer;
    Gyroscope: typeof Gyroscope;
    ProximitySensor: typeof ProximitySensor;
    AmbientLightSensor: typeof AmbientLightSensor;
  }
} 
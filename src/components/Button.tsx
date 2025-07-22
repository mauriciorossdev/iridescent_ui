import React, { useState, useEffect } from 'react';
import { useMobileSensors } from '../hooks/useMobileSensors';

export interface ButtonProps {
  /**
   * El contenido del botón
   */
  children: React.ReactNode;
  /**
   * El tipo de botón
   */
  variant?: 'primary' | 'secondary' | 'outline';
  /**
   * El tamaño del botón
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Función que se ejecuta al hacer clic
   */
  onClick?: () => void;
  /**
   * Si el botón está deshabilitado
   */
  disabled?: boolean;
  /**
   * Habilitar interacción con sensores móviles
   */
  enableSensors?: boolean;
  /**
   * Función que se ejecuta al detectar movimiento
   */
  onMotion?: () => void;
  /**
   * Función que se ejecuta al detectar inclinación
   */
  onTilt?: (tilt: { x: number; y: number }) => void;
  /**
   * Función que se ejecuta al detectar proximidad
   */
  onProximity?: (isNear: boolean) => void;
  /**
   * Función que se ejecuta al cambiar el nivel de luz
   */
  onLightChange?: (level: string) => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  enableSensors = false,
  onMotion,
  onTilt,
  onProximity,
  onLightChange,
  ...props
}) => {
  const [sensorState, setSensorState] = useState({
    isMoving: false,
    tilt: { x: 0, y: 0 },
    isNear: false,
    lightLevel: 'unknown'
  });

  // Configurar sensores si están habilitados
  const sensors = useMobileSensors({
    enableAccelerometer: enableSensors,
    enableOrientation: enableSensors,
    enableProximity: enableSensors,
    enableLight: enableSensors,
    threshold: 0.5
  });

  // Efectos para manejar eventos de sensores
  useEffect(() => {
    if (!enableSensors) return;

    const interval = setInterval(() => {
      // Detectar movimiento
      const isMoving = sensors.detectMotion();
      if (isMoving !== sensorState.isMoving) {
        setSensorState(prev => ({ ...prev, isMoving }));
        onMotion?.();
      }

      // Detectar inclinación
      const tilt = sensors.detectTilt();
      if (Math.abs(tilt.x - sensorState.tilt.x) > 5 || Math.abs(tilt.y - sensorState.tilt.y) > 5) {
        setSensorState(prev => ({ ...prev, tilt }));
        onTilt?.(tilt);
      }

      // Detectar proximidad
      const isNear = sensors.isNear();
      if (isNear !== sensorState.isNear) {
        setSensorState(prev => ({ ...prev, isNear }));
        onProximity?.(isNear);
      }

      // Detectar nivel de luz
      const lightLevel = sensors.getLightLevel();
      if (lightLevel !== sensorState.lightLevel) {
        setSensorState(prev => ({ ...prev, lightLevel }));
        onLightChange?.(lightLevel);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [enableSensors, sensors, sensorState, onMotion, onTilt, onProximity, onLightChange]);

  // Clases base
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Clases de variante
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  };
  
  // Clases de tamaño
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };
  
  // Clases de estado
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  // Clases de sensores
  const sensorClasses = enableSensors ? [
    sensorState.isMoving && 'animate-pulse',
    sensorState.isNear && 'scale-110',
    sensorState.lightLevel === 'dark' && 'brightness-75',
    sensorState.lightLevel === 'bright' && 'brightness-125'
  ].filter(Boolean).join(' ') : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${sensorClasses}`;
  
  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      style={{
        transform: enableSensors ? `rotateX(${sensorState.tilt.y}deg) rotateY(${sensorState.tilt.x}deg)` : undefined
      }}
      {...props}
    >
      {children}
      {enableSensors && (
        <div className="text-xs mt-1 opacity-50">
          {sensors.isSupported.accelerometer && `Mov: ${sensorState.isMoving ? 'Sí' : 'No'}`}
          {sensors.isSupported.proximity && ` | Prox: ${sensorState.isNear ? 'Cerca' : 'Lejos'}`}
          {sensors.isSupported.light && ` | Luz: ${sensorState.lightLevel}`}
        </div>
      )}
    </button>
  );
}; 
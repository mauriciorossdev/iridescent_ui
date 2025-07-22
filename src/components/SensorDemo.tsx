import React, { useState } from 'react';
import { useMobileSensors } from '../hooks/useMobileSensors';

export const SensorDemo: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  
  const sensors = useMobileSensors({
    enableAccelerometer: true,
    enableOrientation: true,
    enableProximity: true,
    enableLight: true,
    threshold: 0.3
  });

  const addLog = (message: string) => {
    setLogs(prev => [...prev.slice(-9), `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const handleMotion = () => {
    addLog('🎯 Movimiento detectado!');
  };

  const handleTilt = (tilt: { x: number; y: number }) => {
    addLog(`📱 Inclinación: X=${tilt.x.toFixed(1)}°, Y=${tilt.y.toFixed(1)}°`);
  };

  const handleProximity = (isNear: boolean) => {
    addLog(`👁️ Proximidad: ${isNear ? 'Cerca' : 'Lejos'}`);
  };

  const handleLightChange = (level: string) => {
    addLog(`💡 Luz: ${level}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Demo de Sensores</h2>
      
      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold mb-2">Estado de Sensores:</h3>
        <div className="space-y-1 text-sm">
          <div>📱 Acelerómetro: {sensors.isSupported.accelerometer ? '✅' : '❌'}</div>
          <div>🔄 Giroscopio: {sensors.isSupported.gyroscope ? '✅' : '❌'}</div>
          <div>📐 Orientación: {sensors.isSupported.orientation ? '✅' : '❌'}</div>
          <div>👁️ Proximidad: {sensors.isSupported.proximity ? '✅' : '❌'}</div>
          <div>💡 Luz: {sensors.isSupported.light ? '✅' : '❌'}</div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Datos en Tiempo Real:</h3>
        <div className="p-3 bg-blue-50 rounded text-sm font-mono">
          <div>Aceleración: X={sensors.sensorData.acceleration.x?.toFixed(2) || 'N/A'}, 
                        Y={sensors.sensorData.acceleration.y?.toFixed(2) || 'N/A'}, 
                        Z={sensors.sensorData.acceleration.z?.toFixed(2) || 'N/A'}</div>
          <div>Orientación: α={sensors.sensorData.orientation.alpha?.toFixed(1) || 'N/A'}°, 
                        β={sensors.sensorData.orientation.beta?.toFixed(1) || 'N/A'}°, 
                        γ={sensors.sensorData.orientation.gamma?.toFixed(1) || 'N/A'}°</div>
          <div>Proximidad: {sensors.sensorData.proximity?.toFixed(1) || 'N/A'} cm</div>
          <div>Luz: {sensors.sensorData.light?.toFixed(0) || 'N/A'} lux</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          onClick={() => {
            sensors.start();
            addLog('▶️ Sensores activados');
          }}
        >
          Activar Sensores
        </button>
        
        <button
          className="p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          onClick={() => {
            sensors.stop();
            addLog('⏹️ Sensores detenidos');
          }}
        >
          Detener Sensores
        </button>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Eventos Detectados:</h3>
        <div className="h-32 overflow-y-auto p-3 bg-gray-50 rounded text-xs font-mono">
          {logs.length === 0 ? (
            <div className="text-gray-500">No hay eventos aún...</div>
          ) : (
            logs.map((log, index) => (
              <div key={index} className="mb-1">{log}</div>
            ))
          )}
        </div>
      </div>

      <div className="text-xs text-gray-600 text-center">
        💡 Mueve, inclina o acerca tu dispositivo para ver los efectos
      </div>
    </div>
  );
}; 
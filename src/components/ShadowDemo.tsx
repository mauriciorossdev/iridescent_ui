import React, { useState } from 'react';
import { useMobileSensors } from '../hooks/useMobileSensors';

export const ShadowDemo: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  
  const sensors = useMobileSensors({
    enableAccelerometer: true,
    enableOrientation: true,
    threshold: 0.2
  });

  const addLog = (message: string) => {
    setLogs(prev => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const shadowDirection = sensors.getShadowDirection();
  const isMoving = sensors.detectMotion();

  // Efecto de sombra dinámica
  const shadowStyle = {
    boxShadow: `${shadowDirection.x}px ${shadowDirection.y}px 20px rgba(0, 0, 0, 0.4)`,
    transform: `rotateX(${sensors.detectTilt().y}deg) rotateY(${sensors.detectTilt().x}deg)`,
    transition: 'box-shadow 0.1s ease-out, transform 0.1s ease-out'
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Demo de Sombra Dinámica</h2>
      
      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold mb-2">Instrucciones:</h3>
        <div className="text-sm space-y-1">
          <div>📱 <strong>Inclina tu dispositivo</strong> para mover la sombra</div>
          <div>🔄 <strong>Mueve el dispositivo</strong> para cambiar la intensidad</div>
          <div>💡 <strong>La sombra sigue la gravedad</strong> simulando una fuente de luz</div>
        </div>
      </div>

      {/* Botón con sombra dinámica */}
      <div className="mb-6 flex justify-center">
        <button
          className={`px-8 py-4 text-lg font-bold rounded-xl transition-all duration-200 ${
            isMoving 
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
              : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800'
          }`}
          style={shadowStyle}
          onClick={() => addLog('¡Botón clickeado!')}
        >
          {isMoving ? '🌟 Movimiento Detectado' : '📱 Mueve tu dispositivo'}
        </button>
      </div>

      {/* Información de sensores */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Datos del Acelerómetro:</h3>
        <div className="p-3 bg-blue-50 rounded text-sm font-mono space-y-1">
          <div>X: {sensors.sensorData.acceleration.x?.toFixed(2) || 'N/A'}</div>
          <div>Y: {sensors.sensorData.acceleration.y?.toFixed(2) || 'N/A'}</div>
          <div>Z: {sensors.sensorData.acceleration.z?.toFixed(2) || 'N/A'}</div>
        </div>
      </div>

      {/* Dirección de la sombra */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Dirección de la Sombra:</h3>
        <div className="p-3 bg-green-50 rounded text-sm font-mono">
          <div>X: {shadowDirection.x.toFixed(1)}px</div>
          <div>Y: {shadowDirection.y.toFixed(1)}px</div>
          <div className="mt-2 text-xs text-gray-600">
            {shadowDirection.x > 0 ? '→ Sombra hacia la derecha' : '← Sombra hacia la izquierda'}
            {shadowDirection.y > 0 ? ' ↓ Sombra hacia abajo' : ' ↑ Sombra hacia arriba'}
          </div>
        </div>
      </div>

      {/* Visualización de la dirección */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Visualización:</h3>
        <div className="relative w-32 h-32 mx-auto bg-gray-200 rounded-lg border-2 border-gray-300">
          {/* Punto central (botón) */}
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Línea de sombra */}
          <div 
            className="absolute top-1/2 left-1/2 w-1 h-8 bg-black transform -translate-x-1/2 -translate-y-1/2 origin-bottom"
            style={{
              transform: `translate(-50%, -50%) rotate(${Math.atan2(shadowDirection.y, shadowDirection.x) * 180 / Math.PI}deg)`,
              opacity: Math.min(1, Math.sqrt(shadowDirection.x ** 2 + shadowDirection.y ** 2) / 20)
            }}
          ></div>
          
          {/* Flecha de dirección */}
          <div 
            className="absolute top-1/2 left-1/2 w-0 h-0 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderBottom: '12px solid #000',
              transform: `translate(-50%, -50%) rotate(${Math.atan2(shadowDirection.y, shadowDirection.x) * 180 / Math.PI}deg)`,
              opacity: Math.min(1, Math.sqrt(shadowDirection.x ** 2 + shadowDirection.y ** 2) / 20)
            }}
          ></div>
        </div>
      </div>

      {/* Logs */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Eventos:</h3>
        <div className="h-24 overflow-y-auto p-3 bg-gray-50 rounded text-xs font-mono">
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
        💡 La sombra simula una fuente de luz que sigue la gravedad
      </div>
    </div>
  );
}; 
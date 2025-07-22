#!/bin/bash

# Script de despliegue para Iridescent UI
# Uso: ./scripts/deploy.sh [platform]

set -e

PLATFORM=${1:-github}

echo "🚀 Iniciando despliegue a $PLATFORM..."

# Verificar Node.js 20+
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
    echo "❌ Error: Se requiere Node.js 20 o superior. Versión actual: $(node --version)"
    exit 1
fi

echo "✅ Node.js $(node --version) detectado"

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm ci

# Build de Storybook
echo "🔨 Construyendo Storybook..."
npm run build-storybook

# Verificar que el build fue exitoso
if [ ! -d "storybook-static" ]; then
    echo "❌ Error: No se encontró el directorio storybook-static"
    exit 1
fi

echo "✅ Build completado exitosamente"

case $PLATFORM in
    "github")
        echo "📤 Desplegando a GitHub Pages..."
        npm run deploy
        echo "✅ Desplegado a GitHub Pages"
        echo "🌐 URL: https://$(git config user.name).github.io/$(basename $(pwd))/"
        ;;
    "vercel")
        echo "📤 Desplegando a Vercel..."
        if ! command -v vercel &> /dev/null; then
            echo "📦 Instalando Vercel CLI..."
            npm install -g vercel
        fi
        vercel --prod
        ;;
    "netlify")
        echo "📤 Desplegando a Netlify..."
        if ! command -v netlify &> /dev/null; then
            echo "📦 Instalando Netlify CLI..."
            npm install -g netlify-cli
        fi
        netlify deploy --prod --dir=storybook-static
        ;;
    "firebase")
        echo "📤 Desplegando a Firebase..."
        if ! command -v firebase &> /dev/null; then
            echo "📦 Instalando Firebase CLI..."
            npm install -g firebase-tools
        fi
        firebase deploy
        ;;
    *)
        echo "❌ Plataforma no soportada: $PLATFORM"
        echo "Plataformas soportadas: github, vercel, netlify, firebase"
        exit 1
        ;;
esac

echo "🎉 ¡Despliegue completado!"
echo "💡 Recuerda que los sensores móviles solo funcionan en HTTPS" 
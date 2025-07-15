#!/bin/bash

# Brain Logic Auto Deployment Script
# This script is executed on the VPS when GitHub Actions deploys

echo "🚀 Starting Brain Logic deployment..."

# Set variables
FRONTEND_DIR="/var/www/brainlogic/html"
BACKEND_DIR="/var/www/brainlogic/backend"
BACKUP_DIR="/var/backups/brainlogic"

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Create backup of current deployment
echo "📦 Creating backup..."
tar -czf "$BACKUP_DIR/backup-$(date +%Y%m%d-%H%M%S).tar.gz" -C /var/www brainlogic

# Install backend dependencies if package.json changed
if [ -f "$BACKEND_DIR/package.json" ]; then
    echo "📦 Installing backend dependencies..."
    cd $BACKEND_DIR
    npm install --production
fi

# Restart backend service
echo "🔄 Restarting backend service..."
pm2 restart brainlogic-api || pm2 start $BACKEND_DIR/server.js --name brainlogic-api

# Reload Nginx
echo "🔄 Reloading Nginx..."
systemctl reload nginx

# Check if services are running
echo "✅ Checking services..."
pm2 status brainlogic-api
systemctl status nginx --no-pager -l

echo "🎉 Deployment completed successfully!"
echo "🌐 Website: https://brainlogic.in"

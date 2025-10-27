# Étape 1 : Build de l’application
FROM node:20-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration
COPY package*.json ./

# Installer les dépendances
RUN npm ci

# Copier le reste du code source
COPY . .

# Build l’application pour la production
RUN npm run build

# Étape 2 : Exécution de l’application
FROM node:20-alpine AS runner

WORKDIR /app

# Copier uniquement les fichiers nécessaires depuis le builder
COPY --from=builder /app/.output ./.output

# Exposer le port utilisé par Nuxt
EXPOSE 3000

# Démarrer le serveur Nitro
CMD ["node", ".output/server/index.mjs"]

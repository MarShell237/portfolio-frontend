# Étape 1 : build
FROM node:20-alpine AS builder

WORKDIR /app

# Copie des fichiers nécessaires
COPY package.json pnpm-lock.yaml ./

# Installation de pnpm
RUN npm install -g pnpm

# Installation des dépendances
RUN pnpm install --frozen-lockfile

# Copie du code source
COPY . .

# Build de l’application
RUN pnpm build

# Étape 2 : production
FROM node:20-alpine AS runner

WORKDIR /app

# Copier les fichiers nécessaires depuis le builder
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

RUN npm install -g pnpm && pnpm install --prod --frozen-lockfile

EXPOSE 3000

# Commande de démarrage Nuxt 4 (Nitro)
CMD ["node", ".output/server/index.mjs"]

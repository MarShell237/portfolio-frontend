# Étape 1 : build
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build


# Étape 2 : production
FROM node:22-alpine AS runner

WORKDIR /app

ENV NITRO_PORT=3000
ENV PORT=3000
ENV HOST=0.0.0.0

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

RUN npm install -g pnpm
RUN pnpm install --prod --frozen-lockfile

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]


# ---------- DEPENDENCIES ----------
FROM node:24-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# ---------- BUILD ----------
FROM node:24-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# ---------- SERVE ----------
FROM node:24-alpine AS serve
WORKDIR /app

ENV NODE_ENV=production

# Create a non-root system user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=build /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 9022
ENV PORT=9022
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
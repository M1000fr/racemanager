FROM node:23-alpine AS builder
RUN corepack enable
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma
RUN pnpm install --frozen-lockfile 
COPY . .
RUN pnpm prisma generate
RUN pnpm run build

FROM node:23-alpine
RUN corepack enable
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
COPY prisma ./prisma
COPY entrypoint.sh ./
RUN chmod +x ./entrypoint.sh
RUN pnpm install --frozen-lockfile --prod
EXPOSE 3000
CMD ["sh", "./entrypoint.sh"]
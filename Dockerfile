FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./

RUN --mount=type=cache,target=/app/.npm \
  npm set cache /app/.npm && \
  npm install

COPY . .

RUN npm run build

FROM nginxinc/nginx-unprivileged:1.26-alpine

COPY --link nginx.conf /etc/nginx/conf.d/default.conf

COPY --link --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080
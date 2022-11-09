FROM node:14.17.0-alpine

WORKDIR /app

ENV NODE_OPTIONS="--max-old-space-size=1024"
ENV CHOKIDAR_USEPOLLING=true

CMD ["/bin/sh"]
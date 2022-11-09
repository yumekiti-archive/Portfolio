FROM node:14.17.0

WORKDIR /mnt/vue/

ENV NODE_OPTIONS="--max-old-space-size=1024"
ENV CHOKIDAR_USEPOLLING=true

CMD ["/bin/bash"]
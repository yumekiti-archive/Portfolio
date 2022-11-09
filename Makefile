
dc := docker compose -f ./docker-compose.yml

up:
	$(dc) up -d --build

down:
	$(dc) down

restart:
	$(dc) restart
	
reup:
	@make down
	@make up

rm:
	$(dc) down --rmi all

logs:
	$(dc) logs -f

node:
	$(dc) exec node /bin/sh

ip:
	bash awk '{print $$1}' ./docker/nginx/log/access.log | sort | uniq -c | sort -nr

.PHONY: up down restart reup rm logs node ip
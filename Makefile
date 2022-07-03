FRONT_DIR := ./front
NODE_MODULES_DIR := $(FRONT_DIR)/node_modules
SERVER_DIR := ./server
RM := rm -rf

all:start

start:
	docker-compose up -d

build:
	docker-compose build

stop:
	docker-compose rm

down:
	docker-compose down --rmi all --volumes --remove-orphans


restart: down start

clean:

fclean:clean

re:fclean restart

# lint
lint:
	gofmt -l -w $(SERVER_DIR)


.PHONY: all start build restart down clean fclean re lint
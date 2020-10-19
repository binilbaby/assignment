# Author: Sarath C

set -e # Error on exit
docker stack deploy -c docker-compose.yml Assignment
docker network create Assignment_default
docker network attach Assignment_default Assignment_db pgadmin4 adminer

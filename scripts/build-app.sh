set -e

# Pull the images
docker pull postgres:12
docker pull adminer:latest
docker pull dpage/pgadmin4

# Build API (develop config)
docker build . -t joinAssignment/api:latest
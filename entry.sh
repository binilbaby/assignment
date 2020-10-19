set -e
sequelize-cli db:seed:all
node server.js
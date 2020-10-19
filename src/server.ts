import { AddressInfo } from "net";

import app from "./app";

import logger from "./utils/logger";

const server = app.listen(app.get("port"), async () => {
  const { port } = server.address() as AddressInfo;
  logger.info(`Server started listening on port ${port}`);
});

export default server;

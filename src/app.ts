import cors from "cors";
import express from "express";
import i18nextMiddleware from "i18next-express-middleware";
import { handleErrors } from "./middlewares/error_handler";
import i18next from "./middlewares/internationalization";
import router from "./routes";

const app = express();

// Express configuration
app.set("port", process.env.PORT);
app.use(cors());

// Internationalization (i18next)
app.use(i18nextMiddleware.handle(i18next));

// Middlewares and router
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(handleErrors());

export default app;

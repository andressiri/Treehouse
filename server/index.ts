import express from "express";
import path from "path";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import db from "./db/models";
import session from "express-session";
import router from "./routes";
import { errorHandler } from "./middlewares";

dotenv.config({ path: path.resolve(__dirname, ".env") });

const devEnvironment = process.env.NODE_ENV === "development";

const app = express();

// Setup fileupload for formdata/multipart
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    createParentPath: true,
  })
);

// Test database connection
db.sequelize
  .authenticate()
  .then(() => {
    if (devEnvironment) console.log("Database is connected..."); // eslint-disable-line no-console
  })
  .catch((err: Error) => {
    if (devEnvironment) {
      console.log("DB Error: " + err); // eslint-disable-line no-console
    }
  });

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// @/api/v1 router
app.use("/api/v1", router);

app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  if (devEnvironment) console.log(`Server started at port ${PORT}`); // eslint-disable-line no-console
});

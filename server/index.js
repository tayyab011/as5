import express from "express";
//hello
import cors from 'cors';
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import hpp from "hpp";
import cookieParser from "cookie-parser";
import router from "./src/routes/api.js"
import {
    database,JWT_KEY,JWT_EXPIRATION_TIME,EMAIL_HOST,EMAIL_PORT,EMAIL_USER,EMAIL_PASSWORD,MAIL_ENCRYPTION,MAX_JSON_SIZE,URL_ENCODED,REQUEST_TIME,REQUEST_NUMBER,WEB_CACHE,PORT
} from './src/config/config.js'
const app = express();

// Global Application Middleware
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:5173",
      "https://mernbasicproject1.netlify.app",
    ].filter(Boolean),
  })
);
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(hpp());
app.use(helmet({
  crossOriginResourcePolicy:false,
})
);
app.use(cookieParser());
const limiter = rateLimit({
  windowMs: REQUEST_TIME,
  max: REQUEST_NUMBER,
});
app.use(limiter);

app.set("etag", WEB_CACHE);

mongoose
  .connect(database, { autoIndex: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
  });
  app.use("/api", router);
  /* app.use(express.static("storage")); */
  app.use("/upload-file", express.static("uploads"));

  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });

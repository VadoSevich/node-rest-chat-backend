import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";

import models from "./modelsSOLID";
import sequelize from "./utils/database";

import authRoutes from "./routesSOLID/auth";
import userRoutes from "./routesSOLID/user";
import conversationRoutes from "./routesSOLID/conversation";
import messageRoutes from "./routesSOLID/message";

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// app.get("/", (req, res, next) => {
//   res.json({ info: "Node.js, Express, and Postgres API" });
// });

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization, autorization"
//   );
//   next();
// });

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/conversation", conversationRoutes);
app.use("/message", messageRoutes);

Object.values(models).forEach(model => {
  model.init(sequelize);
});

Object.values(models).forEach(model => {
  model.initRelationsAndHooks();
});

sequelize
  .sync()
  .then(result => {
    console.log("App running on port" + " " + port);
    app.listen(port);
  })
  .catch(err => {
    console.log(err);
  });

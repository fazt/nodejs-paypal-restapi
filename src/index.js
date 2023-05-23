import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { PORT } from "./config.js";

import paymentRoutes from "./routes/payment.routes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use(paymentRoutes);

app.use(express.static(path.resolve("./src/public")));

app.listen(PORT);
console.log(`Server on port http://localhost:${PORT}`);
console.log(`environment: ${process.env.NODE_ENV}`);

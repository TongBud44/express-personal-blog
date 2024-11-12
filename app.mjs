import express from "express";
import cors from "cors";
import postRouter from "./routes/postRouter.mjs";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use("/posts", postRouter);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

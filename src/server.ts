import Express from "express";
import routes from "./routes/main.route";
import morgan from "morgan";

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api", routes);

app.listen(4000, () => console.log("running 4000"));
export default app;

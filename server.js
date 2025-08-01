import express from "express";
import { router } from "../Server/Router/auth-router.js"; 
import {  connectdbs  } from "../Server/dbs/sbs.js";
import cors from "cors"
import { middleerror } from "../Server/middleware/error-middleware.js";
import {Contectrouter} from "../Server/Router/contect-router.js"
import{serviceRouter} from "../Server/Router/servies.router.js"
import { adminRouter } from "./Router/admin-router.js";

const app = express();

//cors
app.use(cors())

app.use(express.json())

app.use("/api/auth", router);
app.use("/api/from", Contectrouter);
app.use("/api/data", serviceRouter);

//admin route
app.use("/api/admin", adminRouter)



app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome Anuj Negi for backend developer</h1>");
});
//connection cheek kerna se phala hum error check ker reha ha
app.use(middleerror)
const PORT = 5000;
connectdbs().then(()=>{
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});
})
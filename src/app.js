const express = require("express");
const app = express();
const port = 3030;

const routes = require("./routes");

routes.routesApp(app);

app.listen(port,()=>{
  console.log("Programa ejecutanddose en el puerto ",port);
});

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3030;

const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");

routes.routesApp(app);

app.get("/", (req, res) => {
  res.redirect("v1/calendar");
});

app.listen(port, () => {
  console.log("Programa ejecutandose en el puerto ", port);
});

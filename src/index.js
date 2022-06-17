const express = require("express");
const { phone } = require("phone");
const PORT = 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("HOME");
});

app.get("/info", (req, res) => {
  // res.setHeader("Contenty-Type","application/json")
  res.status(200).send({ version: "0.0.1", appName: "Curso Node.js" });
});

app.get("/detail", (req, res) => {
  res.status(200).send("DETAIL");
});

//LOGIN
app.post("/login", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (username === "marcos" && password === "123456") {
    res.send({ status: "OK" });
  } else {
    res.status(401).send("Acceso Denegado");
  }
});

app.get("/phone", (req, res) => {
  try {
    // const query = req.query;
    // const value = req.value;
    // const country = req.country;
    const { value, country } = req.query;
    const result = phone(value, country.toUpperCase());
    res.setHeader("Contenty-Type", "application/json");
    res.status(200).send(JSON.stringify(result));
  } catch (e) {
    res.status(400).send(e.message);
  }
});

//Utlizamos un middleware para el 404
app.use((req, res) => {
  res.status(404).send("NOT FOUND");
});

app.listen(PORT, () => {
  console.log(`Server Running at PORT ${PORT}`);
});

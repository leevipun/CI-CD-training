import express from "express";
import process from "process";
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.listen(PORT, () => {
});

app.get('/version', (res) => {
  res.send('1') // change this string to ensure a new version deployed
})
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { writeSecret } = require('./controller') 
const { codeSecret } = require('./controller')
const { decodeSecret } = require('./controller')
const {deleteSecret } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post("/api/secret/:secret", writeSecret)
app.put('/api/secret/', codeSecret)
app.put('/api/secret/', decodeSecret)
app.delete('/api/:index', deleteSecret)

app.listen(4000, () => console.log("Server running on 4000"));

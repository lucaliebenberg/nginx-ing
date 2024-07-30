const express = require("express")
const app = express()

app.get("/", (req,res) => {
    res.send("I am a GET endoint")
})

app.listen(5555, () => console.log("Listening on port 5555"))

import express from "express";
import "dotenv/config";


const app = express();

const PORT = process.env.PORT || 8000; 

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(PORT, () => {
    console.log(`Serviço escutando em https://localhost:${PORT}`);
})
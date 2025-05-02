import express from "express";
import cors from "cors";
import "dotenv/config.js"
import cookieParser from "cookie-parser";
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(
    cors({
        origin: process.env.ORIGIN,
        credentials: true,
    })
);


app.listen(port,()=>console.info("Server Running Success",port));


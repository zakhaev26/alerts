import express, { Request, Response } from "express"
const app = express();


app.get('/',(req :Request,res : Response) => {
    console.log("hit");
})

app.listen("3000");
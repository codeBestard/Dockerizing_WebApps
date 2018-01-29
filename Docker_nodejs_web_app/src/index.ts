import * as express  from "express";

const app = express();

const port = process.env.PORT || 8080;

app.get("/", function(req : express.Request, res: express.Response, next: express.NextFunction){
    res.send("<h1>Welcome to my page.</h1>")
})

app.listen(port, function(){
    console.log(`listening on port : ${port}`);
});

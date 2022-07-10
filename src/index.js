import express from "express";
import bodyParser from "body-parser";
import productApi from "./RouteApi/productsRoute.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
	res.send("HELLO");
})

app.use("/api/products", productApi);

app.use("/", (err, req, res, next) => {
	if(!err) next();
	const code = err.status || 500;
	const message = err.message;

	return res.status(code).json({code, message});
})

app.listen(3000, () => {
	console.log("Server listening on port 3000");
});
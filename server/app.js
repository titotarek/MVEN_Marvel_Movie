//  require
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const server = require("json-server");
const app = express();

const port = process.env.PORT; // 5000

//  MiddleWare
app.use(cors());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);


app.use(express.static("uploads"));

//  concat to the database
mongoose.set("strictQuery", false);
mongoose
	.connect(process.env.DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("connected to database!"))
	.catch((err) => console.log(err));

//  router prefix

app.use("/api/post", require("./routes/routes"))


// star server
app.listen(port, () =>
	console.log(`serve running on  at http://localhost:${port}`)
);

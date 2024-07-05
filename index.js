const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
    origin: true,
    credentials: true,
}));

// app.get('/', (req,res) => {
//     res.send("Hello world");
// });
app.use("/static",express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.sendFile('/views/index.html');
    res.render('index.html');
});
app.listen(3000, () => {
    console.log("3000 port");
});
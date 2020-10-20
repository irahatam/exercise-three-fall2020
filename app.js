const express = require('express');

const app = express();
// ***** port 3000 is what CRA uses, so we can run these at the same time if it's 4000 ***** //
const port = 4000;

const indexRoute = require('./routes/index.js');
const aboutRoute = require("./routes/about.js");

// ***** Serve static files ***** //
app.use("/static", express.static("public"));

// ***** Routing in Express ***** //
app.use("/", indexRoute);
app.use("/about", aboutRoute);

app.listen(port, () => console.log('Exercise Three is running!'));
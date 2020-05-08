const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const app = require(`${__dirname}/app.js`);

// online database process.env.DB_CONN
//offline database process.env.DB_LOCL
mongoose.connect(
  process.env.DB_CONN,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log("DATABASE CONNECTION ERROR", err);
    else console.log("DATABASE CONNECTION SUCCESSFUL");
  }
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App RUNNING on PORT: ${PORT}`));

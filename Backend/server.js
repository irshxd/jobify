const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// path config
dotenv.config({ path: "Backend/config/config.env" });

// connecting database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`); // middleware
});

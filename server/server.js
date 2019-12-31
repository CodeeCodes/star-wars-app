const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
/// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB config
const db = require("./config/keys").mongoURI;

// connect to mongo
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("mongoDB is connected"))
  .catch(err => console.log(err));
  
//routes
const authRouter = require("./routes/api/auth");
const loginRouter = require("./routes/api/login");

/// Simple API Documentation
app.get("/", (req, res) => {
  res.json({
    msg: "You can perform these requests from this API:"
  });
});

//initialize routes
app.use("/auth", authRouter);
app.use("/login", loginRouter);

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});

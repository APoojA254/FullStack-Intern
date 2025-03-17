const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models/index");

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.send("Store Rating API is Running!"));
// Routes
app.use("/api/auth", require("./routes/auth.routes"));

// Start server
const PORT = process.env.PORT || 5000;

sequelize.sync({ force: false }).then(() => {
  console.log("✅ Database synced!");
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}).catch(err => {
  console.error("❌ Database sync error:", err);
});

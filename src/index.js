import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello",
  });
});

app.get("/api/users");

app.listen(5000, () => {
  console.log("server running on port 5000");
});

//vercel
export default app;

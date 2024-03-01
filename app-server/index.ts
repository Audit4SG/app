import app from "./app";
const PORT = 3333;

(async () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
})();

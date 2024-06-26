import app from "./app";
import * as path from "path";
const PORT = 3333;

(async () => {
  app.get("/*", (req, res) => {
    let joinedPath: string = path.join(__dirname, "/www/index.html");

    res.sendFile(joinedPath, (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
})();

import app from "./app";
import * as path from "path";
const PORT = 3333;

(async () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
})();

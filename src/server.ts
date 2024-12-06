/* eslint-disable no-console */
import app from "./app";
import config from "./config";

async function main() {
  try {
    app.listen(config.port, () => {
      console.log(`App is listening to port ${config.port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
main();

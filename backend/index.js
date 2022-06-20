import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import FBrainUsersDAOs from "./dataAccessObject/fBrainUsersDAO.js"
import WeekdaysDAO from './dataAccessObject/weekdaysDAO.js';

dotenv.config()
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000

MongoClient.connect(process.env.FB_USERS_DB_URI, {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true,
})
  .catch((err) => {
      console.error(err.stack);
      process.exit(1);
  })
    .then(async client => {
        await FBrainUsersDAOs.injectDB(client);
        await WeekdaysDAO.injectDB(client);

        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        });
    });
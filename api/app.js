import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { inProduction } from './config/env.js';
import { fileURLToPath } from 'url';
import path from 'path';
import { connectDB } from './config/db.js';
import cookieParser from 'cookie-parser';
//Import Routes
import usersRoute from "./routes/users.js";
import signupRoute from "./routes/signup.js";
import guestRoute from "./routes/guest.js";
import viewRoute from "./routes/view.js";
import authRoute from "./routes/auth.js";
const app = express()


//Use Routes
app.use("/users", usersRoute);
app.use("/signup", signupRoute);
app.use("/guest", guestRoute);
app.use("/view", viewRoute);
app.use("/auth", authRoute);

const __dirname = path.dirname(fileURLToPath(import.meta.url));

config({
  path: path.join(process.cwd(), '.env.local'),
});
// MONGO_URI= "mongodb+srv://coudadm:EmBnNj7T3cgeSLqx@tourisma.p71xs6v.mongodb.net/?retryWrites=true&w=majority"
// JWT_SECRET= "is_mi_token"
// DISABLE_ESLINT_PLUGIN= true

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '../build')));

if (inProduction) {
  app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });
}

connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch((e) => {
    console.log(
      'An orror has occured while connecting to mongodb : ',
      e.message
    );
  });

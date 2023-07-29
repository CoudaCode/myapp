import { Router } from "express";
import signupController from "../controllers/signup.js";
const router = Router()

router.get("/", signupController.getAll)
router.post("/", signupController.addSignup)
router.post("/search", signupController.searchSignup)
router.post("/delete", signupController.deleteSignup)
router.post("/update", signupController.updateSignup)

export default router;

// router.get("/", async (req, res) => {
//   try {
//     const signupList = await SignUp.find();
//     res.json(signupList);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// router.post("/", async (req, res) => {
//   console.log(req.body);
//   const signup = new SignUp({
//     userName: req.body.userName,
//     userEmail: req.body.userEmail,
//     password: req.body.password,
//     conPassword: req.body.conPassword,
//   });
//   try {
//     const savedSignUp = await signup.save();
//     res.json(savedSignUp);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// router.post("/search", async (req, res) => {
//   console.log(req.body);
//   try {
//     const searchSignUp = await SignUp.find({ userEmail: req.body.userEmail });
//     res.json(searchSignUp);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// router.post("/delete", async (req, res) => {
//   console.log(req.body);
//   try {
//     const deleteSignUp = await SignUp.deleteOne({
//       userEmail: req.body.userEmail,
//     });
//     res.json(deleteSignUp);
//     console.log(searchSignUp);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// router.post("/update", async (req, res) => {
//   console.log(req.body);
//   try {
//     const updateSignUp = await SignUp.updateOne(
//       { userEmail: req.body.userEmail },
//       {
//         $set: {
//           userName: req.body.userName,
//           userEmail: req.body.userEmail,
//           password: req.body.password,
//           conPassword: req.body.conPassword,
//         },
//       }
//     );
//     res.json(updateSignUp);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// module.exports = router;

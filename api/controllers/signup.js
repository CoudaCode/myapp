import express from "express"
import SignUp from "./../models/Signupmodel.js"

//POST
class signupController{
      /**
   * 
   * @param {express.Request} req 
   * @param {express.Response} res 
   * @param {express.NextFunction} next 
   */
  static async getAll(req, res, next) {
    try {
      const signupList = await SignUp.find();
      res.json(signupList);
    } catch (err) {
      res.json({ message: err });
    }
  } 
 /**
   * 
   * @param {express.Request} req 
   * @param {express.Response} res 
   * @param {express.NextFunction} next 
   */
  static async addSignup(req, res, next) {
    console.log(req.body);
    const signup = new SignUp({
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      password: req.body.password,
      conPassword: req.body.conPassword,
    });
    try {
      const savedSignUp = await signup.save();
      res.json(savedSignUp);
    } catch (err) {
      res.json({ message: err });
    }
  }

   /**
   * 
   * @param {express.Request} req 
   * @param {express.Response} res 
   * @param {express.NextFunction} next 
   */

  static async searchSignup(req, res, next){
      console.log(req.body);
  try {
    const searchSignUp = await SignUp.find({ userEmail: req.body.userEmail });
    res.json(searchSignUp);
  } catch (err) {
    res.json({ message: err });
  }
  }


   /**
   * 
   * @param {express.Request} req 
   * @param {express.Response} res 
   * @param {express.NextFunction} next 
   */

  static async deleteSignup(req, res, next){
    console.log(req.body);
  try {
    const deleteSignUp = await SignUp.deleteOne({
      userEmail: req.body.userEmail,
    });
    res.json(deleteSignUp);
    console.log(searchSignUp);
  } catch (err) {
    res.json({ message: err });
  }
}

  /**
   * 
   * @param {express.Request} req 
   * @param {express.Response} res 
   * @param {express.NextFunction} next 
   */
  
  static async updateSignup(req, res, next){
    console.log(req.body);
  try {
    const updateSignUp = await SignUp.updateOne(
      { userEmail: req.body.userEmail },
      {
        $set: {
          userName: req.body.userName,
          userEmail: req.body.userEmail,
          password: req.body.password,
          conPassword: req.body.conPassword,
        },
      }
    );
    res.json(updateSignUp);
  } catch (err) {
    res.json({ message: err });
  }




}
}

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

export default signupController

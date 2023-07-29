import express from "express"
import User from "./../models/Usersmodel.js"


//POST
class userController{
    /**
   * 
   * @param {express.Request} req 
   * @param {express.Response} res 
   * @param {express.NextFunction} next 
   */

  static async getAll(req, res, next) {
    try {
      const usersList = await User.find();
      res.json(usersList);
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
  static async addUser(req, res, next) {
    console.log(req.body);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      country: req.body.country,
      gender: req.body.gender,
    });
    try {
      const savedUser = await user.save();
      res.json(savedUser);
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

  static async searchUser(req, res, next){
      console.log(req.body);
      try {
        const searchUser = await User.find({ email: req.body.email });
        res.json(searchUser);
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

  static async deleteUser(req, res, next){
    try {
      const deleteUser = await User.deleteOne({ email: req.body.email });
      res.json(deleteUser);
      console.log(deleteUser);
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

  static async updateUser(req, res, next){  

    console.log(req.body);
  try {
    const updateUser = await User.updateOne(
      { email: req.body.email },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          address: req.body.address,
          country: req.body.country,
          gender: req.body.gender,
        },
      }
    );
    res.json(updateUser);
  } catch (err) {
    res.json({ message: err });
  }

  }
  }

export default userController

// router.get("/", async (req, res) => {
//   try {
//     const usersList = await User.find();
//     res.json(usersList);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// router.post("/", async (req, res) => {
//   console.log(req.body);
//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     phone: req.body.phone,
//     address: req.body.address,
//     country: req.body.country,
//     gender: req.body.gender,
//   });
//   try {
//     const savedUser = await user.save();
//     res.json(savedUser);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// router.post("/search", async (req, res) => {
//   console.log(req.body);
//   try {
//     const searchUser = await User.find({ email: req.body.email });
//     res.json(searchUser);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// router.post("/delete", async (req, res) => {
//   console.log(req.body);
//   try {
//     const deleteUser = await User.deleteOne({ email: req.body.email });
//     res.json(deleteUser);
//     console.log(deleteUser);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// router.post("/update", async (req, res) => {
//   console.log(req.body);
//   try {
//     const updateUser = await User.updateOne(
//       { email: req.body.email },
//       {
//         $set: {
//           name: req.body.name,
//           email: req.body.email,
//           phone: req.body.phone,
//           address: req.body.address,
//           country: req.body.country,
//           gender: req.body.gender,
//         },
//       }
//     );
//     res.json(updateUser);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// module.exports = router;
